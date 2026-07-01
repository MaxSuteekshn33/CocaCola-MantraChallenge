import Navbar from "@/components/Navbar";

export default function BrandEvolutionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 flex items-center justify-center" style={{ background: "#0A0A0A" }}>
        <div className="text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#E8000D" }}>Coming Next</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Brand Evolution</h1>
          <p className="text-white/50 max-w-md mx-auto">Lifestyle, taste, and the shift to zero sugar — how Coca-Cola reinvented itself for every generation.</p>
        </div>
      </main>
    </>
  );
}
