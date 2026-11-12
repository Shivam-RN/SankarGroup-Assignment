import { Mic, MicOff, Video, MonitorUp, MessageSquare, PhoneOff } from "lucide-react";

const people = [
  { name: "Alex Morgan", initials: "AM", color: "bg-orange-400" },
  { name: "Sarah Wilson", initials: "SW", color: "bg-purple-500" },
  { name: "John Carter", initials: "JC", color: "bg-emerald-500" },
  { name: "Emily Davis", initials: "ED", color: "bg-pink-500" },
];

function MeetingPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/20 bg-slate-950 p-3 shadow-2xl sm:p-5">
      <div className="flex items-center justify-between px-2 py-3">
        <div><p className="font-semibold text-white">Team Meeting</p><p className="text-xs text-slate-400">orbito.app/meeting/123</p></div>
        <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300">● LIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {people.map((person, index) => (
          <div key={person.name} className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${person.color} text-lg font-bold text-white`}>{person.initials}</div>
            <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-xs text-white">{person.name}</div>
            {index === 1 && <span className="absolute right-2 top-2 rounded bg-black/40 p-1 text-white"><MicOff size={13} /></span>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3 rounded-xl bg-slate-800 py-3 text-white">
        <span className="rounded-full bg-slate-700 p-3"><Mic size={17} /></span>
        <span className="rounded-full bg-slate-700 p-3"><Video size={17} /></span>
        <span className="rounded-full bg-slate-700 p-3"><MonitorUp size={17} /></span>
        <span className="rounded-full bg-slate-700 p-3"><MessageSquare size={17} /></span>
        <span className="rounded-full bg-red-500 p-3"><PhoneOff size={17} /></span>
      </div>
    </div>
  );
}
export default MeetingPreview;
