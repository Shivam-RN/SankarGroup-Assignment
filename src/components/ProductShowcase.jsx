import { Video, Mic, MonitorUp, MessageSquare, PhoneOff, Users, MoreHorizontal } from "lucide-react";

const participants = [
  { name: "Alex Morgan", initials: "AM", color: "bg-orange-400" },
  { name: "Sarah Wilson", initials: "SW", color: "bg-purple-500" },
  { name: "John Carter", initials: "JC", color: "bg-emerald-500" },
  { name: "Emily Davis", initials: "ED", color: "bg-pink-500" },
];

function ProductShowcase() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-main">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-label">MEET ORBITO</span>
          <h2 className="section-title">Your meetings, all in one place</h2>
          <p className="section-description">A simple meeting experience designed to help teams stay connected and focused.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-4 shadow-2xl sm:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div><h3 className="font-semibold text-white">Product Planning</h3><p className="mt-1 text-xs text-slate-400">Meeting room · 04 participants</p></div>
            <div className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300">00:24:18</div>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
            <div className="grid grid-cols-2 gap-3">
              {participants.map((person) => (
                <div key={person.name} className="flex aspect-video items-center justify-center rounded-xl bg-slate-800">
                  <div className="text-center">
                    <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${person.color} font-bold text-white`}>{person.initials}</div>
                    <p className="mt-3 text-sm text-white">{person.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <aside className="rounded-xl bg-slate-900 p-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4"><span className="flex items-center gap-2 font-semibold text-white"><Users size={17} /> Participants</span><MoreHorizontal size={18} className="text-slate-400" /></div>
              {participants.map((person) => (
                <div key={person.name} className="flex items-center gap-3 py-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${person.color} text-xs font-bold text-white`}>{person.initials}</div>
                  <span className="text-sm text-slate-300">{person.name}</span>
                </div>
              ))}
              <div className="mt-3 rounded-lg bg-slate-800 p-3">
                <p className="text-xs font-semibold text-white">Team chat</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">Alex: Let's review the latest design updates.</p>
                <p className="mt-2 text-xs leading-5 text-blue-300">Sarah: Sounds good!</p>
              </div>
            </aside>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-xl bg-slate-900 p-4">
            <button aria-label="Microphone" className="rounded-full bg-slate-700 p-3 text-white"><Mic size={19} /></button>
            <button aria-label="Camera" className="rounded-full bg-slate-700 p-3 text-white"><Video size={19} /></button>
            <button aria-label="Share screen" className="rounded-full bg-slate-700 p-3 text-white"><MonitorUp size={19} /></button>
            <button aria-label="Chat" className="rounded-full bg-slate-700 p-3 text-white"><MessageSquare size={19} /></button>
            <button aria-label="End meeting" className="rounded-full bg-red-500 p-3 text-white"><PhoneOff size={19} /></button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">Illustrative meeting interface. Controls are visual elements, not a live video call.</p>
      </div>
    </section>
  );
}
export default ProductShowcase;
