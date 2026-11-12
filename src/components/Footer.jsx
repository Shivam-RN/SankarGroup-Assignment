import { Video, Mail, ArrowUpRight } from "lucide-react";

function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-main py-14">
        <div className="grid gap-10 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600"><Video size={22} /></span>
              <span className="text-2xl font-extrabold">Orbito<span className="text-blue-400">.</span></span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Connect. Collaborate. Communicate. Make every conversation count with Orbito.</p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-5 space-y-3">{links.map((link) => <li key={link.name}><a href={link.href} className="text-sm text-slate-400 transition hover:text-white">{link.name}</a></li>)}</ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <a href="mailto:hello@orbito.app" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Mail size={17} />hello@orbito.app<ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Orbito. All rights reserved.</p>
          <p>Connect. Collaborate. Communicate.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
