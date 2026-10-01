import LivePlayer from "@/components/LivePlayer";
import Agenda from "@/components/Agenda";

export default function Live() {
  return (
    <div className="live">
      <LivePlayer />
      <Agenda />
    </div>
  );
}
