"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/home", label: "Home" },
  { href: "/home/ferramentas", label: "Ferramentas" },
  { href: "/home/series", label: "Séries" },
  { href: "/home/live", label: "Live" },
  { href: "/home/sobre", label: "Sobre" },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav className="tabs" aria-label="Principal">
      {TABS.map((t) => {
        const active = pathname === t.href;
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`tab ${active ? "tab-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
