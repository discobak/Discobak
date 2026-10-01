import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <Link href="/" className="home-logo">
          discobak
        </Link>
      </header>
      <main className="home-main">{/* conteúdo da home vai aqui */}</main>
    </>
  );
}
