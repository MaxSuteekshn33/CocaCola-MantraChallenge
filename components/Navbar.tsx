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
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
      style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Row 1 — Brand heading */}
      <div className="flex items-center justify-center px-5 pt-3 pb-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-base uppercase" style={{ letterSpacing: "0.18em" }}>
            Coca‑Cola
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "#E8000D", color: "white" }}>
            Mantra
          </span>
        </Link>
      </div>

      {/* Row 2 — Nav links centered */}
      <div className="flex items-center justify-center gap-1 px-3 pb-2.5">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-full font-medium transition-all duration-300 text-center"
              style={{
                background: active ? "#E8000D" : "rgba(255,255,255,0.05)",
                color: active ? "white" : "rgba(255,255,255,0.55)",
                border: active ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.08)",
                fontSize: "11px",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
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
