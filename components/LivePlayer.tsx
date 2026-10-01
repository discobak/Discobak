"use client";

import { useEffect, useRef, useState } from "react";

const STREAM_URL =
  "https://vs20.live.opencaster.com/discobaktele_eafe2c2b/index.m3u8";

export default function LivePlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [offline, setOffline] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setOffline(false);

    let hls: import("hls.js").default | null = null;
    let cancelled = false;

    // Safari / iOS tocam HLS nativamente
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = STREAM_URL;
      video.play().catch(() => {});
      const onError = () => setOffline(true);
      video.addEventListener("error", onError);
      return () => video.removeEventListener("error", onError);
    }

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;
      if (!Hls.isSupported()) {
        setOffline(true);
        return;
      }
      hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(STREAM_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (_e, data) => {
        if (data.fatal) setOffline(true);
      });
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [attempt]);

  return (
    <div className="player">
      <video ref={videoRef} controls playsInline muted autoPlay />
      {offline && (
        <div className="player-offline">
          <p>A transmissão está fora do ar no momento.</p>
          <button className="btn-abrir" onClick={() => setAttempt((a) => a + 1)}>
            tentar de novo
          </button>
        </div>
      )}
    </div>
  );
}
