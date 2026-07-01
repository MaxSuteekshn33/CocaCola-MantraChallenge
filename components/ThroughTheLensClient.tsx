"use client";
import { useState } from "react";

const culturalMoments = [
  {
    year: "1931",
    title: "Santa Gets a Makeover",
    image: "/assets/culture_1931_santa.webp",
    description: "Artist Haddon Sundblom painted Coca-Cola's Santa Claus — a warm, jolly figure in red and white. This campaign didn't just sell Coke; it defined how the entire world pictures Santa Claus to this day.",
    tag: "Advertising",
  },
  {
    year: "1971",
    title: "I'd Like to Buy the World a Coke",
    image: "/assets/culture_1971_hilltop.jpg",
    description: "On a hilltop in Italy, 200 young people from 30 nations sang together holding Coke bottles. The Hilltop ad became the most iconic commercial ever made — a vision of unity that resonated far beyond soft drinks.",
    tag: "Pop Culture",
  },
  {
    year: "1979",
    title: "Mean Joe Greene",
    image: "/assets/culture_1979_meanjo.jpeg",
    description: "NFL star 'Mean Joe' Greene accepts a Coke from a young fan and tosses back his jersey in thanks. The ad won an Emmy and cemented Coca-Cola as the bridge between sports, emotion, and everyday people.",
    tag: "Sports",
  },
  {
    year: "1990s",
    title: "FIFA World Cup Partnership",
    image: "/assets/culture_1990_fifa.jpeg",
    description: "Coca-Cola became one of FIFA's longest-standing global partners, embedding the brand into the world's most-watched sporting event. Wherever football went, Coke followed — uniting fans across 200+ nations.",
    tag: "Sports",
  },
  {
    year: "2011",
    title: "Share a Coke",
    image: "/assets/culture_2011_shareacoke.jpg",
    description: "Replacing the logo with 150 of the most popular names transformed a commodity into a personal message. 'Share a Coke' became a global movement — people hunted shelves for their name and shared millions of photos online.",
    tag: "Campaign",
  },
  {
    year: "Present",
    title: "The Olympic Spirit",
    image: "/assets/culture_olympics.webp",
    description: "As the longest continuous Olympic sponsor since 1928, Coca-Cola has been present at every Games — a constant symbol of global human achievement, community, and refreshment across nearly a century of competition.",
    tag: "Sports",
  },
];

const celebrities = [
  {
    name: "Marilyn Monroe",
    image: "/assets/celeb_marilyn.jpg",
    era: "1950s",
    note: "Hollywood's golden era — Coke as glamour.",
  },
  {
    name: "Michael Jordan",
    image: "/assets/celeb_jordan.jpg",
    era: "1990s",
    note: "The GOAT's choice — aspirational Americana.",
  },
  {
    name: "Lionel Messi",
    image: "/assets/celeb_messi.jpg",
    era: "2000s–Now",
    note: "Football's global icon meets the world's drink.",
  },
  {
    name: "BTS",
    image: "/assets/celeb_bts.jpeg",
    era: "FIFA 2022",
    note: "K-pop meets football — Gen Z's cultural moment.",
  },
  {
    name: "Diljit Dosanjh",
    image: "/assets/celeb_diljit.jpeg",
    era: "India",
    note: "India's cultural icon — bridging tradition and pop.",
  },
];

const modernCollabs = [
  {
    brand: "Marvel",
    image: "/assets/collab_marvel.jpeg",
    description: "Limited edition Marvel x Coca-Cola cans brought superhero culture to every fridge. A masterclass in co-branding — two legacy icons, one can.",
    year: "2023",
    tags: ["Pop Culture", "Limited Edition"],
  },
  {
    brand: "FIFA World Cup",
    description: "Official soft drink of the FIFA World Cup since 1978. Coca-Cola's football presence spans 5 decades and every continent — the most consistent brand in the game.",
    year: "1978–Present",
    tags: ["Sports", "Global"],
    color: "#1A3A5C",
  },
  {
    brand: "Olympics",
    description: "The world's oldest corporate Olympic sponsor. Present at every Games since 1928 — 96 years of fuelling the human spirit of competition.",
    year: "1928–Present",
    tags: ["Sports", "Heritage"],
    color: "#1A1A2E",
  },
  {
    brand: "K-Pop / BTS",
    description: "Coca-Cola partnered with BTS for the 2022 FIFA World Cup anthem campaign — reaching billions of Gen Z fans globally and proving the brand moves with culture, not against it.",
    year: "2022",
    tags: ["Music", "Gen Z"],
    color: "#2A1A3A",
  },
  {
    brand: "Bollywood & India",
    description: "From Aamir Khan to Diljit Dosanjh, Coca-Cola has consistently partnered with India's biggest cultural icons — making the brand feel local in the world's most diverse market.",
    year: "1990s–Now",
    tags: ["India", "Regional"],
    color: "#2A1A1A",
  },
  {
    brand: "Gaming & Esports",
    description: "Coca-Cola entered esports with League of Legends and gaming event sponsorships — meeting the next generation of consumers exactly where they live.",
    year: "2020s",
    tags: ["Gaming", "Digital"],
    color: "#0A2A1A",
  },
];

const quotes = [
  { text: "Things go better with Coke.", year: "1963", context: "A campaign that made Coke synonymous with every good moment in life." },
  { text: "I'd like to buy the world a Coke.", year: "1971", context: "The Hilltop ad — a message of unity heard around the world." },
  { text: "Can't Beat the Real Thing.", year: "1990", context: "A direct challenge to Pepsi, reclaiming the original." },
  { text: "Open Happiness.", year: "2009", context: "A global platform that redefined Coke as an emotion, not a drink." },
];

const tagColors: Record<string, string> = {
  "Advertising": "#8B5A2B",
  "Pop Culture": "#5A2B8B",
  "Sports": "#1A4A8B",
  "Campaign": "#1A8B4A",
  "Music": "#8B1A5A",
  "Gen Z": "#5A8B1A",
  "India": "#8B4A1A",
  "Regional": "#1A8B8B",
  "Gaming": "#2A5A8B",
  "Digital": "#4A2A8B",
  "Heritage": "#6B4A2A",
  "Global": "#1A5A4A",
  "Limited Edition": "#8B2A1A",
};

interface ModalData {
  image: string;
  year?: string;
  tag?: string;
  name?: string;
  era?: string;
  title: string;
  description: string;
}

export default function ThroughTheLensClient() {
  const [modal, setModal] = useState<ModalData | null>(null);

  return (
    <main className="min-h-screen pt-28 pb-24" style={{ background: "#0A0A0A" }}>

      {/* ── MODAL ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{
              background: "rgba(18,18,18,0.98)",
              border: "1px solid rgba(232,0,13,0.3)",
              boxShadow: "0 0 60px rgba(232,0,13,0.2), 0 24px 64px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative flex items-center justify-center" style={{ height: "280px", background: "#080808" }}>
              <img src={modal.image} alt={modal.title} className="w-full h-full object-contain p-4" />
              <div className="absolute bottom-0 left-0 right-0 h-10" style={{ background: "linear-gradient(to top, rgba(18,18,18,0.98), transparent)" }} />
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, #E8000D, transparent)" }} />
              {modal.year && (
                <span className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#E8000D", color: "white" }}>
                  {modal.year}
                </span>
              )}
              {modal.tag && (
                <span className="absolute top-4 right-10 text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  {modal.tag}
                </span>
              )}
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col gap-2">
              {modal.era && <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8000D" }}>{modal.era}</span>}
              <h2 className="text-white font-bold text-xl">{modal.title}</h2>
              <p className="text-white/70 text-sm leading-relaxed">{modal.description}</p>
            </div>
            {/* Close */}
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#E8000D" }}>
          Chapter Three
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Through the Lens</h1>
        <p className="text-white/50 text-base md:text-lg leading-relaxed">
          How Coca-Cola didn't just follow culture — it shaped it. From Santa Claus to K-pop, the brand has been present at every defining human moment.
        </p>
      </section>

      {/* ── CULTURAL MOMENTS ── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-end gap-4 mb-10">
          <span className="text-4xl font-black text-white/10">01</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Cultural Moments</h2>
            <p className="text-white/40 text-sm mt-1">The campaigns that defined generations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {culturalMoments.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              onClick={() => setModal({ image: item.image, year: item.year, tag: item.tag, title: item.title, description: item.description })}
            >
              {/* Image with object-contain on dark bg so nothing gets cropped */}
              <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "220px", background: "#0d0d0d" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#E8000D", color: "white" }}>
                  {item.year}
                </span>
                <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  {item.tag}
                </span>
              </div>
              <div className="p-5" style={{ background: "rgba(18,18,18,0.98)" }}>
                <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                <p className="text-xs mt-2 font-medium" style={{ color: "#E8000D" }}>Tap to read more →</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(232,0,13,0.4))" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#E8000D" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(232,0,13,0.4))" }} />
        </div>
      </div>

      {/* ── CELEBRITIES ── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-end gap-4 mb-10">
          <span className="text-4xl font-black text-white/10">02</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Faces of the Brand</h2>
            <p className="text-white/40 text-sm mt-1">Icons who made Coke part of their story</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {celebrities.map((celeb, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 active:scale-[0.98]"
              style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              onClick={() => setModal({ image: celeb.image, era: celeb.era, title: celeb.name, description: celeb.note })}
            >
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <img
                  src={celeb.image}
                  alt={celeb.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(0.8) saturate(0.9)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm">{celeb.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{celeb.era}</p>
                  <p className="text-white/40 text-xs mt-1 leading-tight">{celeb.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(232,0,13,0.4))" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#E8000D" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(232,0,13,0.4))" }} />
        </div>
      </div>

      {/* ── MODERN COLLABS ── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-end gap-4 mb-10">
          <span className="text-4xl font-black text-white/10">03</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Modern Partnerships</h2>
            <p className="text-white/40 text-sm mt-1">How Coca-Cola stays culturally relevant today</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modernCollabs.map((collab, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {collab.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={collab.image}
                    alt={collab.brand}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.7)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                </div>
              )}
              {!collab.image && (
                <div
                  className="h-20 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${collab.color || "#1A1A2E"}, rgba(0,0,0,0.5))` }}
                >
                  <span className="text-white/20 text-xs tracking-widest uppercase font-bold">{collab.brand}</span>
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-base">{collab.brand}</h3>
                  <span className="text-white/40 text-xs">{collab.year}</span>
                </div>
                <p className="text-white/55 text-xs leading-relaxed mb-4">{collab.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {collab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${tagColors[tag] || "#333"}33`,
                        color: "rgba(255,255,255,0.6)",
                        border: `1px solid ${tagColors[tag] || "#333"}55`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(232,0,13,0.4))" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#E8000D" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(232,0,13,0.4))" }} />
        </div>
      </div>

      {/* ── QUOTE WALL ── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-end gap-4 mb-10">
          <span className="text-4xl font-black text-white/10">04</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Words That Moved the World</h2>
            <p className="text-white/40 text-sm mt-1">The lines that became part of culture</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-8 h-0.5"
                style={{ background: "#E8000D" }}
              />
              <blockquote className="text-white text-lg md:text-xl font-semibold leading-snug">
                "{q.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(232,0,13,0.15)", color: "#E8000D" }}>
                  {q.year}
                </span>
                <p className="text-white/40 text-xs">{q.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
