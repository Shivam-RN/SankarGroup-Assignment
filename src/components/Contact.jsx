import { useEffect, useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

function Contact({ initialMessage, onMessageChange }) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: initialMessage || "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((previous) => ({ ...previous, message: initialMessage || "" }));
  }, [initialMessage]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (name === "message") onMessageChange(value);
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      onMessageChange("");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="pt-4">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Let's make your next meeting better.</h2>
            <p className="mt-6 max-w-lg leading-8 text-slate-600">Have questions or want to explore Orbito for your team? Send us a message and we'll be happy to help.</p>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Mail size={22} /></div>
              <div><p className="text-sm text-slate-500">Email us</p><a href="mailto:hello@orbito.app" className="font-semibold text-slate-900 hover:text-blue-600">hello@orbito.app</a></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-9">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto h-14 w-14 text-green-500" />
                <h3 className="mt-5 text-2xl font-bold text-slate-900">Message received!</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Thank you for your interest in Orbito. This is a demo confirmation; no message was sent to a server.</p>
                <button onClick={() => setSubmitted(false)} className="mt-7 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="form-input" />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>
                <div className="mb-5">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="form-input" />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
                <div className="mb-5">
                  <label className="form-label" htmlFor="company">Company (Optional)</label>
                  <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="form-input" />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help..." className="form-input resize-none" />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full rounded-full bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">Send Message</button>
                <p className="mt-4 text-center text-xs text-slate-400">Demo form only. Your information is not stored or sent.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
