"use client";
import { useState } from "react";
import ExpandCards, { CardItem } from "@/components/ui/expand-cards";
import InfoModal from "@/components/InfoModal";
import YearTimeline from "@/components/YearTimeline";

// ── Bottle data ──────────────────────────────────────────────────────────────
const bottleCards: CardItem[] = [
  {
    year: "1886",
    title: "Hutchinson Glass Bottle",
    image: "/assets/1886_CocaColaBottle.jpeg",
    description: "Coca-Cola's first commercially bottled package, allowing the drink to move beyond soda fountains. Its internal wire-stopper seal preserved carbonation, but proved expensive and difficult to clean.",
  },
  {
    year: "1894",
    title: "Hutchinson Straight-Sided",
    image: "/assets/1894_CocaColaBottle.jpg",
    description: "The Hutchinson bottle became Coca-Cola's first commercially bottled package, allowing the drink to move beyond soda fountains into homes and retail stores.",
  },
  {
    year: "1900",
    title: "Crown-Top Glass Bottle",
    image: "/assets/1900_CocaColaBottle.jpg",
    description: "Coca-Cola adopted a straight-sided glass bottle with the newly popular crown cap, making production faster, cheaper, and more reliable. However, competitors quickly copied the shape.",
  },
  {
    year: "1915",
    title: "Contour Bottle Prototype",
    image: "/assets/1915_CocaColaBottle.jpeg",
    description: "To combat imitation, Coca-Cola challenged glass manufacturers to create a bottle recognizable 'even in the dark or if broken.' Earl R. Dean's iconic contour design delivered a unique silhouette.",
  },
  {
    year: "1916",
    title: "Hobble-Skirt Contour Bottle",
    image: "/assets/1916_CocaColaBottle.jpg",
    description: "The production-ready contour bottle featured a slimmer waist for manufacturing stability while retaining its distinctive curves — becoming one of the world's most recognizable packaging designs.",
  },
  {
    year: "1923",
    title: "Christmas Contour Bottle",
    image: "/assets/1923_CocaColaBottle.webp",
    description: "Patented on December 25, 1923, the refined contour bottle with improved proportions for manufacturing consistency became affectionately known as the 'Christmas Bottle.'",
  },
  {
    year: "1957",
    title: "King & Family Size",
    image: "/assets/1957_CocaColaBottle.jpg",
    description: "Responding to post-war consumer demand and larger family purchases, Coca-Cola introduced bigger contour bottles while preserving the iconic silhouette.",
  },
  {
    year: "1960",
    title: "12-oz Steel Soda Can",
    image: "/assets/1960_CocaColaBottle.jpg",
    description: "Coca-Cola entered the canned beverage market to meet rising demand for convenience, portability, and vending-machine compatibility. The lightweight steel can expanded the brand beyond glass.",
  },
  {
    year: "1978",
    title: "2-Liter PET Plastic Bottle",
    image: "/assets/1978_CocaColaBottle.jpeg",
    description: "PET plastic bottles made Coca-Cola lighter, shatter-resistant, and ideal for supermarkets. The 2-liter format significantly reduced transportation costs while matching household buying habits.",
  },
  {
    year: "1983",
    title: "PET Contour Bottle",
    image: "/assets/1983_CocaColaBottle.webp",
    description: "Advances in plastic molding enabled Coca-Cola to recreate its famous contour shape in PET, combining iconic brand identity with the practicality of plastic.",
  },
  {
    year: "2005",
    title: "Aluminum Contour Bottle",
    image: "/assets/2005_CocaColaBottle.jpg",
    description: "The sleek aluminum contour bottle was introduced as a premium package for events and campaigns. Its modern metallic finish elevated Coca-Cola's image while celebrating the timeless contour design.",
  },
  {
    year: "2010s",
    title: "PlantBottle",
    image: "/assets/2010s_CocaColaBottl.webp",
    description: "Coca-Cola unveiled the PlantBottle, made partially from plant-based materials, as part of its sustainability strategy — reducing fossil-fuel plastic dependence while maintaining the iconic shape.",
  },
  {
    year: "2020",
    title: "Modern rPET Bottle",
    image: "/assets/2020_CocaColaBottle.jpg",
    description: "Today's bottles combine the iconic contour shape with lightweight construction and recycled PET, reflecting a shift from branding-focused packaging to balancing sustainability and consumer convenience.",
  },
  {
    year: "2025",
    title: "Lightweight Contour",
    image: "/assets/2025_CocaColaBottle.png",
    description: "The latest iteration continues the sustainability journey — thinner walls, higher recycled content, same unmistakable silhouette that has defined the brand for over a century.",
  },
  {
    year: "2026",
    title: "Future Contour",
    image: "/assets/2026_CocaColaBottle.webp",
    description: "Coca-Cola's packaging evolution continues with next-generation materials that aim for 100% recycled or renewable content — proving that timeless design and sustainability are not in conflict.",
  },
];

// ── Logo data ─────────────────────────────────────────────────────────────────
const logoCards: CardItem[] = [
  {
    year: "1889",
    title: "Original Spencerian Script",
    image: "/assets/1889_Logo.webp",
    description: "Frank M. Robinson introduced the iconic Spencerian script, believing the two 'C's would stand out in advertising. The elegant handwriting reflected professionalism and trust.",
  },
  {
    year: "1890",
    title: "Ornate Flourish Era",
    image: "/assets/1890_Logo.webp",
    description: "Coca-Cola briefly experimented with an ornate logo featuring decorative swirls and flourishes, following the artistic tastes of the era. It proved too elaborate and reduced readability.",
  },
  {
    year: "1891",
    title: "Restored Spencerian",
    image: "/assets/1891_Logo.webp",
    description: "The company restored the classic Spencerian script while beginning to emphasize its signature red branding. The cleaner presentation improved recognition across all packaging.",
  },
  {
    year: "1893",
    title: "Trademark Script",
    image: "/assets/1893_Logo.webp",
    description: "After receiving official trademark protection, Coca-Cola added the words 'Trade Mark' within the first 'C' to signal legal ownership, distinguishing authentic Coca-Cola from imitators.",
  },
  {
    year: "1903",
    title: "Bolder Script",
    image: "/assets/1903_Logo.webp",
    description: "The script became slightly bolder, with tighter spacing and improved proportions for greater legibility — a refinement rather than reinvention, creating a stronger and more confident identity.",
  },
  {
    year: "1958",
    title: "Arciform 'Fishtail'",
    image: "/assets/1958_Logo.webp",
    description: "Coca-Cola introduced the Arciform, or 'Fishtail,' logo, placing the script inside a bold red shape for storefront signs and diners. It reflected the optimistic, modern retail culture of the 1950s.",
  },
  {
    year: "1969",
    title: "Dynamic Ribbon Device",
    image: "/assets/1969_Logo.webp",
    description: "The Arden Square identity debuted with the famous Dynamic Ribbon Device (the white wave), adding movement and freshness to the classic script — one of Coca-Cola's most enduring visual elements.",
  },
  {
    year: "1982",
    title: "New Coke Typography",
    image: "/assets/1982_Logo.webp",
    description: "During the controversial 'New Coke' era, Coca-Cola experimented with a bold, simplified typographic treatment to signal change. Consumer backlash showed people valued the brand's heritage.",
  },
  {
    year: "Present",
    title: "Minimalist Spencerian",
    image: "/assets/Present_Logo.webp",
    description: "Coca-Cola returned to a minimalist identity, relying almost entirely on its iconic Spencerian script and signature red-and-white palette — reflecting confidence that no decoration is needed for instant recognition.",
  },
];

// ── Timeline data ─────────────────────────────────────────────────────────────
const bottleTimelineItems = bottleCards.map((c) => ({ year: c.year, title: c.title, description: c.description, image: c.image }));
const logoTimelineItems = logoCards.map((c) => ({ year: c.year, title: c.title, description: c.description, image: c.image }));

export default function VisualIdentityClient() {
  const [modal, setModal] = useState<CardItem | null>(null);

  return (
    <main className="min-h-screen pt-28 pb-24" style={{ background: "#0A0A0A" }}>
      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#E8000D" }}>
          Chapter One
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Visual Identity</h1>
        <p className="text-white/50 text-base md:text-lg leading-relaxed">
          From the first glass bottle to a modern sustainability icon — and from a pharmacy script to the world's most recognised wordmark.
        </p>
      </section>

      {/* ── BOTTLE SECTION ── */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="flex items-end gap-4 mb-2">
            <span className="text-4xl font-black text-white/10">01</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Bottle Through Time</h2>
          </div>
          <p className="text-white/40 text-sm ml-14"><span className="hidden md:inline">Hover to explore · </span>Tap to read more</p>
        </div>

        <ExpandCards items={bottleCards} onCardClick={setModal} />

        <div className="max-w-7xl mx-auto px-6 mt-12">
          <YearTimeline items={bottleTimelineItems} onYearClick={setModal} accentColor="#E8000D" />
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

      {/* ── LOGO SECTION ── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="flex items-end gap-4 mb-2">
            <span className="text-4xl font-black text-white/10">02</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Logo Evolution</h2>
          </div>
          <p className="text-white/40 text-sm ml-14"><span className="hidden md:inline">Hover to explore · </span>Tap to read more</p>
        </div>

        <ExpandCards items={logoCards} onCardClick={setModal} />

        <div className="max-w-7xl mx-auto px-6 mt-12">
          <YearTimeline items={logoTimelineItems} onYearClick={setModal} accentColor="#E8000D" />
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <InfoModal
          year={modal.year}
          title={modal.title}
          description={modal.description}
          image={modal.image}
          onClose={() => setModal(null)}
        />
      )}
    </main>
  );
}
