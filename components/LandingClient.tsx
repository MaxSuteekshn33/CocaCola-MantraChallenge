"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LandingClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: videoEnded ? 0.3 : 0.85, transition: "opacity 1.5s ease" }}
      >
        <source src="/assets/Brand_CocaColaVideo.mp4" type="video/mp4" />
      </video>

      {/* Red gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">
        {/* Logo wordmark */}
        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationFillMode: "forwards" }}
        >
          <p className="text-xs tracking-[0.4em] text-red-400 uppercase mb-3 font-medium">
            Brand Evolution · Since 1886
          </p>
          <h1
            className="text-6xl md:text-8xl font-black tracking-tight text-white"
            style={{ textShadow: "0 0 60px rgba(232,0,13,0.5)" }}
          >
            Coca‑Cola
          </h1>
          <p className="text-white/50 text-lg mt-3 tracking-widest uppercase font-light">
            The Mantra Challenge
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-white/60 text-base md:text-lg max-w-md leading-relaxed animate-fade-in-up delay-200"
          style={{ opacity: 0, animationFillMode: "forwards" }}
        >
          140 years. One timeless identity. Explore how a brand became a feeling.
        </p>

        {/* CTA Button */}
        {showCTA && (
          <Link
            href="/visual-identity"
            className="animate-fade-in group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E8000D, #9B0000)",
              boxShadow: "0 0 30px rgba(232,0,13,0.4), 0 8px 32px rgba(0,0,0,0.4)",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <span>Begin the Journey</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>

      {/* Bottom scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </div>
  );
}
