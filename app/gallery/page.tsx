import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 flex items-center justify-center" style={{ background: "#0A0A0A" }}>
        <div className="text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#E8000D" }}>Coming Next</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Through the Lens</h1>
          <p className="text-white/50 max-w-md mx-auto">Generations united by one taste — a photo gallery of people and their Coke.</p>
        </div>
      </main>
    </>
  );
}
