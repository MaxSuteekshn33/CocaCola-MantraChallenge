"use client";
import { useEffect, useRef } from "react";

export default function ScrollBottleBackground() {
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bottleRef.current) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // progress: 0 at top → 1 at bottom
      const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);

      // Reveal bottle from top (cap) to bottom as user scrolls
      // clip-path inset: top=0 always visible, bottom shrinks from 100% → 0%
      const revealed = Math.round(progress * 100);
      bottleRef.current.style.clipPath = `inset(0 0 ${100 - revealed}% 0)`;
      // Also gently fade in opacity
      bottleRef.current.style.opacity = String(0.04 + progress * 0.08);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-end pr-8 md:pr-24"
      aria-hidden="true"
    >
      <div
        ref={bottleRef}
        className="w-48 md:w-72 lg:w-96 h-full transition-none"
        style={{
          clipPath: "inset(0 0 100% 0)",
          opacity: 0.04,
        }}
      >
        <img
          src="/assets/background_image.webp"
          alt=""
          className="w-full h-full object-contain object-center"
          style={{ filter: "brightness(0.4) saturate(0.3)" }}
        />
      </div>
    </div>
  );
}
