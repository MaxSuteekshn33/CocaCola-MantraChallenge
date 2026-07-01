"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/visual-identity", label: "Visual Identity" },
  { href: "/brand-evolution", label: "Brand Evolution" },
  { href: "/gallery", label: "Through the Lens" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <Link href="/" className="flex items-center gap-2 group">
        <span className="text-white font-bold text-lg tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
          Coca‑Cola
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#E8000D", color: "white" }}>
          Mantra
        </span>
      </Link>

      <div className="flex items-center gap-1">
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
    </nav>
  );
}
