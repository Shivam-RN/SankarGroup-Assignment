import { Plus, Link, Users } from "lucide-react";

const steps = [
  { number: "01", icon: Plus, title: "Create a Meeting", description: "Start a new meeting in just a few clicks and get your meeting room ready." },
  { number: "02", icon: Link, title: "Share the Link", description: "Send your unique meeting link to colleagues, friends or team members." },
  { number: "03", icon: Users, title: "Connect and Collaborate", description: "Join the conversation, share ideas and make teamwork easier." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-slate-50">
      <div className="container-main">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">Start connecting in three simple steps</h2>
          <p className="section-description">No complicated process. Just create, share and connect.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={26} /></div>
                  <span className="text-3xl font-extrabold text-blue-100">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
