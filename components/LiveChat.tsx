"use client";

// Coloque na Vercel (Settings → Environment Variables):
// NEXT_PUBLIC_CHAT_URL = endereço de incorporação (embed) do seu chat
const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL;

export default function LiveChat() {
  if (!CHAT_URL) {
    return (
      <div className="chat chat-empty">
        <p>O chat ao vivo abre em breve.</p>
      </div>
    );
  }

  return (
    <div className="chat">
      <iframe src={CHAT_URL} title="Chat ao vivo" allow="clipboard-write" />
    </div>
  );
}
