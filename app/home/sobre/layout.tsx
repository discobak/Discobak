import SubTabs from "@/components/SubTabs";

const ITEMS = [
  { href: "/home/sobre", label: "Sobre" },
  { href: "/home/sobre/faq", label: "FAQ" },
];

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="section">
      <SubTabs items={ITEMS} label="Sobre" />
      {children}
    </div>
  );
}
