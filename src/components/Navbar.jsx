import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["AI", "#ai"],
  ["Industries", "#industries"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          Muhammad Usman<span>.</span>
        </a>
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
        >
          {open ? "✕" : "☰"}
        </button>
        <div
          id="nav-links"
          className={`nav-links ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="#demo" className="nav-cta">
            Free Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
