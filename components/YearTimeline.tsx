"use client";
import { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface YearTimelineProps {
  items: TimelineItem[];
  onYearClick: (item: TimelineItem) => void;
  accentColor?: string;
}

export default function YearTimeline({ items, onYearClick, accentColor = "#E8000D" }: YearTimelineProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full">
      <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Click a year for full context</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isHovered = hovered === item.year;
          return (
            <button
              key={item.year}
              onClick={() => onYearClick(item)}
              onMouseEnter={() => setHovered(item.year)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95"
            style={{ minHeight: "44px", display: "flex", alignItems: "center" }}
              style={{
                background: isHovered ? accentColor : "rgba(255,255,255,0.06)",
                color: isHovered ? "white" : "rgba(255,255,255,0.5)",
                border: `1px solid ${isHovered ? accentColor : "rgba(255,255,255,0.1)"}`,
                transform: isHovered ? "translateY(-2px)" : "none",
                boxShadow: isHovered ? `0 4px 20px ${accentColor}40` : "none",
              }}
            >
              {item.year}
              {isHovered && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/80 bg-black/80 px-2 py-1 rounded-md pointer-events-none">
                  {item.title}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
