"use client";
import { useEffect, useRef } from "react";

export default function ScrollBottleBackground() {
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bottleRef.current) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Complete the reveal in the first 70% of scroll so it's clearly visible
      const progress = Math.min(Math.max(scrollY / (docHeight * 0.7), 0), 1);

      // Clip from bottom: 100% hidden → 0% hidden as user scrolls
      const hidden = Math.round((1 - progress) * 100);
      bottleRef.current.style.clipPath = `inset(0 0 ${hidden}% 0)`;

      // Opacity: starts at 0.15, reaches 0.35 at full reveal — clearly visible
      bottleRef.current.style.opacity = String(0.15 + progress * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-end pr-4 md:pr-16"
      aria-hidden="true"
    >
      <div
        ref={bottleRef}
        className="w-40 md:w-64 lg:w-80 h-full"
        style={{ clipPath: "inset(0 0 100% 0)", opacity: 0.15 }}
      >
        <img
          src="/assets/background_image.webp"
          alt=""
          className="w-full h-full object-contain object-center"
          style={{ filter: "brightness(0.6) saturate(0.4)" }}
        />
      </div>
    </div>
  );
}
