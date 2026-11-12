import { Video, MessageSquare, MonitorUp, ShieldCheck, Link, Users } from "lucide-react";

const features = [
  { icon: Video, title: "HD Video Meetings", description: "Enjoy clear and smooth video calls that make every conversation feel more personal." },
  { icon: MessageSquare, title: "In-Meeting Chat", description: "Share messages and important information with your team without interrupting meetings." },
  { icon: MonitorUp, title: "Screen Sharing", description: "Present your work, explain ideas and collaborate with everyone on the same screen." },
  { icon: ShieldCheck, title: "Secure Meeting Rooms", description: "Keep your conversations organized with private meeting rooms and controlled access." },
  { icon: Link, title: "Easy Meeting Access", description: "Invite participants using a simple meeting link. No complicated setup required." },
  { icon: Users, title: "Team Collaboration", description: "Bring people together to discuss projects, exchange ideas and work as one team." },
];

function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="section-label">FEATURES</span>
          <h2 className="section-title">Everything you need for better meetings</h2>
          <p className="section-description">Powerful meeting tools designed to keep your team connected and your conversations productive.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={24} /></div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Features;
