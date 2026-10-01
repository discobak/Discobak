import SubTabs from "@/components/SubTabs";

const ITEMS = [
  { href: "/home/discobaktv", label: "Transmissão" },
  { href: "/home/discobaktv/agenda", label: "Agenda de eventos" },
];

export default function TvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="section">
      <SubTabs items={ITEMS} label="DiscobakTV" />
      {children}
    </div>
  );
}
