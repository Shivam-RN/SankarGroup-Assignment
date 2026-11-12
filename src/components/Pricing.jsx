import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

function Pricing({ onPlanSelect }) {
  const [yearly, setYearly] = useState(false);
  const plans = [
    { name: "Free", monthlyPrice: 0, yearlyPrice: 0, description: "Perfect for getting started.", features: ["Up to 30 participants", "60-minute meetings", "Standard video quality", "In-meeting chat", "Basic collaboration"], button: "Get Started Free", popular: false },
    { name: "Premium", monthlyPrice: 499, yearlyPrice: 4990, description: "For teams that want more.", features: ["Up to 100 participants", "Unlimited meeting duration", "HD video quality", "In-meeting chat", "Screen sharing", "Enhanced collaboration"], button: "Get Premium", popular: true },
  ];

  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="container-main">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-label">PRICING</span>
          <h2 className="section-title">Simple plans for every team</h2>
          <p className="section-description">Start free and upgrade whenever your team needs more.</p>
        </div>
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className={!yearly ? "font-semibold text-slate-900" : "text-slate-500"}>Monthly</span>
          <button type="button" onClick={() => setYearly(!yearly)} aria-label="Toggle yearly pricing" aria-pressed={yearly} className={`relative h-7 w-12 rounded-full transition ${yearly ? "bg-blue-600" : "bg-slate-300"}`}>
            <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${yearly ? "left-6" : "left-1"}`} />
          </button>
          <span className={yearly ? "font-semibold text-slate-900" : "text-slate-500"}>Yearly</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">2 months free</span>
        </div>
        <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div key={plan.name} className={`relative rounded-3xl border bg-white p-8 ${plan.popular ? "border-blue-500 shadow-xl shadow-blue-100" : "border-slate-200"}`}>
                {plan.popular && <span className="absolute -top-3 right-7 flex items-center gap-1 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white"><Sparkles size={13} /> Most Popular</span>}
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                <div className="mt-7 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">₹{price.toLocaleString("en-IN")}</span>
                  <span className="text-sm text-slate-500">/{yearly ? "year" : "month"}</span>
                </div>
                {yearly && plan.name === "Premium" && <p className="mt-2 text-sm text-green-600">Equivalent to ₹416/month</p>}
                <button onClick={() => onPlanSelect(plan.name)} className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>{plan.button}</button>
                <div className="mt-8 border-t border-slate-100 pt-7">
                  <p className="mb-5 text-sm font-semibold text-slate-900">What's included:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-slate-600"><Check size={17} className="shrink-0 text-green-600" />{feature}</li>)}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-7 text-center text-xs text-slate-400">Illustrative pricing for this landing-page assignment. No payment processing is connected.</p>
      </div>
    </section>
  );
}
export default Pricing;
