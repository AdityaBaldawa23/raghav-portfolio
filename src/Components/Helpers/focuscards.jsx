"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/util";
import Image from "next/image";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
  onClick,
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => onClick(card)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-125 w-full transition-all duration-300 ease-out mb-16 cursor-pointer",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <Image src={card.src} alt={card.title} className="object-contain" fill />
  </div>
));

Card.displayName = "Card";

// ── Modal ─────────────────────────────────────────────────────────────────────
function CardModal({ card, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm"
      onClick={onClose}                        // click backdrop → close
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}   // don't close when clicking image
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-9 z-10 flex items-center justify-center w-16 h-16 text-3xl border border-white rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full aspect-video">
          <Image
            src={card.src}
            alt={card.title}
            className="object-contain"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
}

// ── FocusCards ────────────────────────────────────────────────────────────────
export function FocusCards({ cards }) {
  const [hovered,  setHovered]  = useState(null);
  const [selected, setSelected] = useState(null);  // card object or null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onClick={setSelected}
          />
        ))}
      </div>

      {/* Modal — only renders when a card is selected */}
      {selected && (
        <CardModal card={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}