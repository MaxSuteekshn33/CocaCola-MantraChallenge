"use client";
import { useState } from "react";

export interface CardItem {
  year: string;
  title: string;
  image: string;
  description: string;
}

interface ExpandCardsProps {
  items: CardItem[];
  onCardClick?: (item: CardItem) => void;
}

export default function ExpandCards({ items, onCardClick }: ExpandCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState(Math.floor(items.length / 2));

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-start md:justify-center gap-2 px-4 min-w-max mx-auto"
        style={{ height: "420px" }}>
        {items.map((item, idx) => {
          const isExpanded = idx === expandedIndex;
          return (
            <div
              key={item.year}
              className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-shrink-0"
              style={{
                width: isExpanded ? "280px" : "72px",
                height: "380px",
                border: isExpanded ? "1px solid rgba(232,0,13,0.5)" : "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={() => setExpandedIndex(idx)}
              onClick={() => onCardClick?.(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                style={{ filter: isExpanded ? "brightness(0.7)" : "brightness(0.4) saturate(0.5)" }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: isExpanded
                    ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
                }}
              />

              {/* Collapsed: vertical year label */}
              {!isExpanded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-white/70 font-bold text-sm tracking-widest"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
                  >
                    {item.year}
                  </span>
                </div>
              )}

              {/* Expanded: content */}
              {isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8000D" }}>
                    {item.year}
                  </span>
                  <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                  <button
                    className="mt-2 self-start text-xs px-3 py-1.5 rounded-full font-medium transition-all hover:scale-105"
                    style={{ background: "#E8000D", color: "white" }}
                    onClick={(e) => { e.stopPropagation(); onCardClick?.(item); }}
                  >
                    Read More →
                  </button>
                </div>
              )}

              {/* Red accent bar at bottom when expanded */}
              {isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "#E8000D" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
