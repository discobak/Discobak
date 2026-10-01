import Link from "next/link";
import LivePlayer from "@/components/LivePlayer";

export default function DiscobakTV() {
  return (
    <>
      <LivePlayer />
      <Link href="/home/discobaktv/agenda" className="btn-abrir tv-btn">
        Agenda de eventos
      </Link>
    </>
  );
}
