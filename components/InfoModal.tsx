"use client";
import { useEffect } from "react";

interface InfoModalProps {
  year: string;
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

export default function InfoModal({ year, title, description, image, onClose }: InfoModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden animate-fade-in-up"
        style={{
          background: "rgba(18,18,18,0.95)",
          border: "1px solid rgba(232,0,13,0.3)",
          boxShadow: "0 0 60px rgba(232,0,13,0.2), 0 24px 64px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative overflow-hidden flex items-center justify-center" style={{ height: "320px", background: "rgba(8,8,8,0.95)" }}>
          <img src={image} alt={title} className="w-full h-full object-contain p-4" />
          <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to top, rgba(18,18,18,0.95), transparent)" }} />
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, #E8000D, transparent)" }} />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8000D" }}>{year}</span>
          <h2 className="text-white font-bold text-xl">{title}</h2>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
