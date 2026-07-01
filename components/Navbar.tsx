"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/visual-identity", label: "Visual Identity" },
  { href: "/brand-evolution", label: "Brand Evolution" },
  { href: "/gallery", label: "Through the Lens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-4"
        style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="text-white font-bold text-base md:text-lg uppercase" style={{ letterSpacing: "0.15em" }}>
            Coca‑Cola
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#E8000D", color: "white" }}>
            Mantra
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: active ? "#E8000D" : "transparent",
                  color: active ? "white" : "rgba(255,255,255,0.6)",
                  border: active ? "1px solid #E8000D" : "1px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl transition-all"
          style={{ background: menuOpen ? "rgba(232,0,13,0.15)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white transition-all duration-300" style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 3px)" : "none" }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300" style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -3px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="fixed top-[64px] left-0 right-0 z-40 flex flex-col md:hidden"
          style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-sm font-medium border-b transition-all"
                style={{
                  color: active ? "#E8000D" : "rgba(255,255,255,0.7)",
                  borderColor: "rgba(255,255,255,0.06)",
                  background: active ? "rgba(232,0,13,0.08)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
