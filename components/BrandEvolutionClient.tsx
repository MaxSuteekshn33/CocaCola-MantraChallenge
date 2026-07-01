"use client";
import { useState } from "react";

const eras = [
  {
    id: "classic",
    years: "1886 – 1950s",
    label: "The Classic Era",
    image: "/assets/era_classic.jpg",
    color: "#8B1A1A",
    accent: "#D4A017",
    tagline: "Born in a pharmacy. Became a ritual.",
    description:
      "Coca-Cola began as a syrup sold at soda fountains, but quickly became the centrepiece of American social life. The brand leaned into warmth, tradition, and family — its red and white palette synonymous with celebrations, diners, and the American Dream. Advertising was print-led, with ornate posters and Norman Rockwell-style imagery cementing Coke as comfort.",
    designHighlights: ["Spencerian script wordmark", "Hand-painted tin signs", "Warm sepia & red palette", "Soda fountain culture"],
    consumerShift: "Post-war optimism — Coke was aspirational, a treat shared at the counter.",
  },
  {
    id: "popculture",
    years: "1960s – 1980s",
    label: "The Pop Culture Era",
    image: "/assets/era_popculture.webp",
    color: "#1A3A5C",
    accent: "#E8000D",
    tagline: "\"I'd like to buy the world a Coke.\"",
    description:
      "Television changed everything. Coca-Cola became a cultural force — not just a drink, but a symbol of unity and optimism. The 1971 Hilltop ad, featuring people of all nations singing together, became one of the most iconic commercials ever made. The Dynamic Ribbon Device was introduced, adding movement to the brand. Celebrity partnerships and sports sponsorships expanded the reach globally.",
    designHighlights: ["Dynamic Ribbon Device introduced", "Bold TV-optimised visuals", "Fishtail / Arciform logo", "Red + white contrast maximised"],
    consumerShift: "Youth identity — Coke became the drink of pop, rock, and rebellion.",
  },
  {
    id: "global",
    years: "1990s – 2000s",
    label: "The Global Era",
    image: "/assets/era_global.webp",
    color: "#1A4A2A",
    accent: "#E8000D",
    tagline: "Your name. Their bottle. One world.",
    description:
      "The 'Share a Coke' campaign — replacing the logo with people's names — became one of the most successful personalisation plays in marketing history. Coca-Cola stopped talking at consumers and started talking with them. Digital and social media allowed the brand to be participatory. The visual identity simplified further, stripping back decoration to let the iconic script breathe.",
    designHighlights: ["Minimalist script logo", "Personalisation at scale", "Digital-first campaign thinking", "Clean white + red palette"],
    consumerShift: "Global youth — hyper-personalisation and social sharing drove identity.",
  },
  {
    id: "wellness",
    years: "2010s – Now",
    label: "The Wellness Era",
    image: "/assets/era_wellness.webp",
    color: "#1A1A2E",
    accent: "#00C2FF",
    tagline: "Same feeling. Zero compromise.",
    description:
      "As health consciousness reshaped consumer choices worldwide, Coca-Cola made its boldest strategic pivot: embracing the 'One Brand' strategy. Coke Zero Sugar was redesigned to carry the same iconic red identity as Classic Coke — erasing the stigma of 'diet' drinks. The brand acknowledged that taste preferences evolve without apologising for its heritage. Sustainability, recycled packaging, and reduced sugar variants now sit alongside the original.",
    designHighlights: ["One Brand strategy — unified red identity", "Coke Zero rebranded from black to red", "Sustainability-led packaging", "Sleek, minimal — screen-optimised"],
    consumerShift: "Health-aware generations — the brand adapted without losing its soul.",
  },
];

const colorDNA = [
  { label: "Coca-Cola Red", hex: "#E8000D", note: "Unchanged since 1886" },
  { label: "Classic White", hex: "#FFFFFF", note: "Script & ribbon contrast" },
  { label: "Vintage Gold", hex: "#D4A017", note: "1900s–1950s print era" },
  { label: "Midnight Black", hex: "#0A0A0A", note: "Zero Sugar identity" },
  { label: "Digital Blue", hex: "#00C2FF", note: "2020s wellness campaigns" },
];

export default function BrandEvolutionClient() {
  const [activeEra, setActiveEra] = useState(0);
  const era = eras[activeEra];

  return (
    <main className="min-h-screen pt-24 pb-24" style={{ background: "#0A0A0A" }}>

      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#E8000D" }}>
          Chapter Two
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Brand Evolution</h1>
        <p className="text-white/50 text-base md:text-lg leading-relaxed">
          Lifestyle, taste, and the relentless reinvention of a 140-year-old brand — without ever losing itself.
        </p>
      </section>

      {/* ── ERA SELECTOR ── */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {eras.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActiveEra(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeEra === i ? "#E8000D" : "rgba(255,255,255,0.06)",
                color: activeEra === i ? "white" : "rgba(255,255,255,0.5)",
                border: `1px solid ${activeEra === i ? "#E8000D" : "rgba(255,255,255,0.1)"}`,
                boxShadow: activeEra === i ? "0 4px 24px rgba(232,0,13,0.35)" : "none",
                transform: activeEra === i ? "translateY(-2px)" : "none",
              }}
            >
              {e.years}
            </button>
          ))}
        </div>

        {/* Era card */}
        <div
          key={era.id}
          className="rounded-3xl overflow-hidden animate-fade-in"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
              <img
                src={era.image}
                alt={era.label}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: "brightness(0.75) saturate(0.9)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${era.color}CC 0%, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: era.accent, color: "white" }}
                >
                  {era.years}
                </span>
                <h2 className="text-white font-black text-2xl md:text-3xl mt-3 leading-tight">
                  {era.label}
                </h2>
                <p className="text-white/70 text-sm mt-1 italic">"{era.tagline}"</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between gap-6">
              <div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{era.description}</p>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Design Highlights</p>
                  <div className="flex flex-col gap-2">
                    {era.designHighlights.map((h) => (
                      <div key={h} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#E8000D" }} />
                        <span className="text-white/60 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.2)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E8000D" }}>
                  Consumer Shift
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{era.consumerShift}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Era dots nav */}
        <div className="flex justify-center gap-2 mt-6">
          {eras.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveEra(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: activeEra === i ? "24px" : "8px",
                height: "8px",
                background: activeEra === i ? "#E8000D" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(232,0,13,0.4))" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#E8000D" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(232,0,13,0.4))" }} />
        </div>
      </div>

      {/* ── COLOR DNA ── */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-10">
          <div className="flex items-end gap-4 mb-2">
            <span className="text-4xl font-black text-white/10">03</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Colour DNA</h2>
          </div>
          <p className="text-white/40 text-sm ml-14">How the palette evolved while red stayed constant</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {colorDNA.map((c) => (
            <div
              key={c.hex}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-full rounded-xl"
                style={{ height: "80px", background: c.hex, boxShadow: `0 4px 20px ${c.hex}40` }}
              />
              <div>
                <p className="text-white font-semibold text-sm">{c.label}</p>
                <p className="text-white/40 text-xs font-mono mt-0.5">{c.hex}</p>
                <p className="text-white/40 text-xs mt-1">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ZERO SUGAR SPLIT ── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="flex items-end gap-4 mb-2">
            <span className="text-4xl font-black text-white/10">04</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Zero Sugar Pivot</h2>
          </div>
          <p className="text-white/40 text-sm ml-14">Same soul. New choice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Classic */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-4"
            style={{ background: "linear-gradient(135deg, rgba(232,0,13,0.15), rgba(232,0,13,0.05))", border: "1px solid rgba(232,0,13,0.25)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: "#E8000D" }} />
              <span className="text-white font-bold text-lg">Coca-Cola Classic</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The original formula — bold, sweet, iconic. 140 years of emotional connection. Red as identity, taste as memory. The benchmark everything else is measured against.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Original formula", "Full sugar", "Heritage red", "Nostalgia-driven"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(232,0,13,0.15)", color: "#E8000D", border: "1px solid rgba(232,0,13,0.3)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Zero */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-4"
            style={{ background: "linear-gradient(135deg, rgba(0,194,255,0.1), rgba(0,0,0,0.3))", border: "1px solid rgba(0,194,255,0.2)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: "#00C2FF" }} />
              <span className="text-white font-bold text-lg">Coke Zero Sugar</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The boldest brand decision of the modern era: dropping the 'diet' black can and adopting the same iconic red. Zero Sugar became a full Coca-Cola — not a compromise, but a choice. Targeting health-aware millennials without alienating loyalists.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Zero sugar", "Same taste goal", "Unified red identity", "Health-forward"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(0,194,255,0.1)", color: "#00C2FF", border: "1px solid rgba(0,194,255,0.25)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bridge line */}
        <div
          className="mt-8 rounded-2xl p-6 text-center"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto">
            The One Brand strategy proved that a 140-year-old company could adapt to shifting health values without rewriting its identity. <span className="text-white font-semibold">The red stayed. The feeling stayed. The choice expanded.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
