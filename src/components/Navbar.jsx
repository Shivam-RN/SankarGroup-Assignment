import { useState } from "react";
import { Menu, X, Video } from "lucide-react";
import logo from "../../public/logo.svg";
function Navbar({ onGetStarted }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <nav className="container-main flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={closeMenu}>
<img
    src={logo}
    alt="Orbito Logo"
    className="h-10 w-10 object-contain"
  />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">Orbito<span className="text-blue-600">.</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">{link.name}</a>)}
        </div>

        <button onClick={onGetStarted} className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:block">Get Started</button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-slate-700 md:hidden" aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="text-sm font-medium text-slate-700">{link.name}</a>)}
            <button onClick={() => { closeMenu(); onGetStarted(); }} className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
