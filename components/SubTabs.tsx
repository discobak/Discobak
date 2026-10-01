"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };

export default function SubTabs({ items, label }: { items: Item[]; label: string }) {
  const pathname = usePathname();

  return (
    <nav className="subtabs" aria-label={label}>
      {items.map((t) => {
        const active = pathname === t.href;
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`subtab ${active ? "subtab-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
