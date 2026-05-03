"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const reelItems = [
  { src: "/Images/Social/social1.jpeg", label: "Wireless Ghost",      category: "Product Design",  client: "Linsoul × Thieaudio" },
  { src: "/Images/Social/social2.jpeg", label: "Gives You Power",     category: "Social Campaign", client: "Hell Energy" },
  { src: "/Images/Social/social3.jpeg", label: "3 Days Remaining",    category: "Event Promo",     client: "Acer × Intel" },
  { src: "/Images/Social/social4.jpeg", label: "Drop Zone",           category: "Key Visual",      client: "PUBG" },
  { src: "/Images/Social/social5.jpeg", label: "Raze — Boom",        category: "Fan Art",         client: "Valorant" },
  { src: "/Images/Social/social6.jpeg", label: "Life · Death",        category: "Conceptual",      client: "Personal" },
  { src: "/Images/Social/social7.jpeg", label: "18V Tools",           category: "Product Ad",      client: "Bosch" },
  { src: "/Images/Social/social8.jpeg", label: "Cut. Grind. Power.",  category: "E-Commerce",      client: "Bosch × Amazon" },
  { src: "/Images/Social/social9.jpeg", label: "A Warm Moment",       category: "Brand Identity",  client: "Kokumi" },
];

/* ── tiny arrow ── */
function ArrowBtn({ dir, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={dir === "left" ? "Previous" : "Next"}
      style={{
        flexShrink: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: `1px solid ${hov ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.10)"}`,
        background: "none",
        cursor: "pointer",
        color: hov ? "#e8e8e0" : "rgba(255,255,255,0.38)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.22s",
        transform: hov ? "scale(1.06)" : "scale(1)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        {dir === "left" ? (
          <path d="M9 2L4.5 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M5 2L9.5 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

/* ── main component ── */
export default function HeroReel() {
  const [active, setActive]         = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta]   = useState(0);
  const dragStartX = useRef(0);
  const autoRef    = useRef(null);
  const total      = reelItems.length;

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setActive(a => (a + 1) % total), 5000);
  }, [total]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  const go = (dir) => {
    setActive(a => (a + dir + total) % total);
    resetAuto();
  };

  const onPointerDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    setDragDelta(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStartX.current);
  };
  const onPointerUp = () => {
    if (Math.abs(dragDelta) > 50) go(dragDelta < 0 ? 1 : -1);
    setIsDragging(false);
    setDragDelta(0);
  };

  const item = reelItems[active];

  return (
    <section
      style={{
        background: "#080808",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        paddingBottom: "clamp(60px,8vh,100px)",
        overflow: "hidden",
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          padding: "clamp(72px,10vh,120px) clamp(24px,6vw,80px) 0",
          marginBottom: "clamp(28px,4vh,52px)",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-body)",
            marginBottom: "12px",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#28deff",
            }}
          />
          Selected Work
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px,5vw,60px)",
              fontWeight: 400,
              color: "#e8e8e0",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            The work{" "}
            <em style={{ color: "#28deff", fontStyle: "italic" }}>speaks.</em>
          </h2>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.2)",
              fontFamily: "var(--font-body)",
              textTransform: "uppercase",
              paddingBottom: "6px",
            }}
          >
            Drag or swipe
          </p>
        </div>
      </div>

      {/* ── STAGE ── */}
      <div
        style={{
          padding: "0 clamp(34px,8vw,80px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px,2vh,20px)",
        }}
      >
        {/* Hero image */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1",
            maxHeight: "clamp(200px,56vh,540px)",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "none",
            background: "none",
            border: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          {reelItems.map((it, i) => (
            <img
              key={i}
              src={it.src}
              alt={it.label}
              draggable={false}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                pointerEvents: "none",
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1.01)" : "scale(1.05)",
                transition:
                  "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          ))}

          {/* Bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.15) 45%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Label */}
          <div
            key={`label-${active}`}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: "clamp(16px,3vw,28px)",
              animation: "hfadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "9px",
                letterSpacing: "0.22em",
                color: "#28deff",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              {item.category} — {item.client}
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "clamp(16px,2.8vw,26px)",
                color: "#e8e8e0",
                lineHeight: 1.15,
              }}
            >
              {item.label}
            </p>
          </div>

          {/* Counter */}
          <p
            style={{
              position: "absolute",
              top: "clamp(12px,2vw,20px)",
              right: "clamp(12px,2vw,20px)",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.28)",
            }}
          >
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        {/* Thumb strip + arrows */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(8px,1.5vw,14px)",
          }}
        >
          <ArrowBtn dir="left" onClick={() => go(-1)} />

          <div
            style={{
              flex: 1,
              display: "flex",
              gap: "clamp(5px,1vw,8px)",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              padding: "2px 0",
            }}
          >
            {reelItems.map((it, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); resetAuto(); }}
                style={{
                  flexShrink: 0,
                  width: "clamp(48px,9.5vw,84px)",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  border: i === active
                    ? "1.5px solid #28deff"
                    : "1.5px solid rgba(255,255,255,0.07)",
                  background: "#111",
                  padding: 0,
                  cursor: "pointer",
                  opacity: i === active ? 1 : 0.4,
                  transition: "opacity 0.3s, border-color 0.3s",
                }}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    transform: i === active ? "scale(1)" : "scale(1.06)",
                    transition: "transform 0.4s",
                    pointerEvents: "none",
                  }}
                />
              </button>
            ))}
          </div>

          <ArrowBtn dir="right" onClick={() => go(1)} />
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "rgba(40,222,255,0.5)",
              width: `${((active + 1) / total) * 100}%`,
              transition: "width 0.55s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes hfadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}