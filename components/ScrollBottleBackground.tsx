"use client";
import { useEffect, useRef } from "react";

export default function ScrollBottleBackground() {
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bottleRef.current) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Reveal completes by 75% of page scroll
      const progress = Math.min(Math.max(scrollY / (docHeight * 0.75), 0), 1);

      // inset(top right bottom left)
      // bottom clip shrinks from 100% → 0% = cap reveals first, base last
      const hidden = Math.round((1 - progress) * 100);
      bottleRef.current.style.clipPath = `inset(0 0 ${hidden}% 0)`;
      bottleRef.current.style.opacity = String(0.12 + progress * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Fixed, full screen, centred
    <div
      className="fixed inset-0 pointer-events-none z-0 flex items-start justify-center"
      aria-hidden="true"
    >
      <div
        ref={bottleRef}
        // Narrow column so the bottle sits neatly in the centre without covering text
        className="w-32 sm:w-44 md:w-56 h-full"
        style={{ clipPath: "inset(0 0 100% 0)", opacity: 0.12 }}
      >
        <img
          src="/assets/background_image.webp"
          alt=""
          // object-contain + top-aligned so cap is at the very top of the viewport
          className="w-full h-full object-contain object-top"
          style={{ filter: "brightness(0.55) saturate(0.35)" }}
        />
      </div>
    </div>
  );
}
