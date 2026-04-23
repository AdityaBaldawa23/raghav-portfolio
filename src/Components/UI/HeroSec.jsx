"use client";

import { useState, useEffect } from "react";

/*
  ┌────────────────────────────────────────────────────────────────────┐
  │  FACE ALIGNMENT — calibrated from your actual images               │
  │                                                                    │
  │  Designer face center: 1042px / 1920px wide image                 │
  │  Gamer face center:     982px / 1920px wide image                 │
  │                                                                    │
  │  At rest: left panel = 50vw, right panel = 50vw                   │
  │  object-position is set so both faces kiss the center seam.        │
  │                                                                    │
  │  On hover: hovered panel expands to 100vw, other shrinks to 0vw   │
  │  → Full image reveal of that side                                  │
  │                                                                    │
  │  On load: left slides from -100%, right slides from +100%          │
  └────────────────────────────────────────────────────────────────────┘
*/

// Pixel-computed from your 1920×626 images (consistent across all viewports)
const D_OBJ_POS = "31.7% center"; // designer face sits at right edge of left panel
const G_OBJ_POS = "76.4% center"; // gamer face sits at left edge of right panel

const SP = "cubic-bezier(0.77, 0, 0.175, 1)"; // snappy spring
const EA = "cubic-bezier(0.22, 1, 0.36, 1)"; // smooth ease-out

export default function HeroSection() {
  const [hover, setHover] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Double-RAF ensures CSS transition fires from the initial off-screen state
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setLoaded(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  const panelT = `width 0.72s ${SP}, transform 1.1s ${EA}`;
  const labelT = `opacity 0.45s ease, transform 0.75s ${EA}`;

  // Left panel: 50% → 100% on hover-left, 50% → 0% on hover-right
  const leftW = hover === "left" ? "90%" : hover === "right" ? "10%" : "50%";
  const rightW = hover === "right" ? "100%" : hover === "left" ? "0%" : "50%";

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0a0a0b] mt-24">
      {/* ══════════════════════════════════════════════════════════
          STAGE
      ══════════════════════════════════════════════════════════ */}
      <div className="relative flex flex-1 min-h-[88vh] overflow-hidden">
        {/* ── LEFT PANEL ── Designer Side ────────────────────── */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{
            width: leftW,
            transform: loaded ? "translateX(0)" : "translateX(-100%)",
            transition: panelT,
            zIndex: hover === "left" ? 20 : 10,
          }}
          onMouseEnter={() => setHover("left")}
          onMouseLeave={() => setHover(null)}
        >
          <img
            src="/Images/Designer Side.png"
            alt="Designer"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            style={{
              transform: "translateX(-12%) scale(1.1)",
              transform: hover === "left" ? "scale(1.04)" : "scale(1)",
              transition: `transform 0.85s ${EA}`,
            }}
            draggable={false}
          />

          {/* ── Left label ── */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              left: "clamp(22px, 5vw, 58px)",
              top: "50%",
              zIndex: 30,
              opacity: loaded ? (hover === "right" ? 0.08 : 1) : 0,
              transform: loaded
                ? "translateY(-50%)"
                : "translateY(calc(-50% + 20px))",
              transition: labelT,
              transitionDelay: loaded ? "0s" : "0.5s",
            }}
          >
            <h1
              className="text-white font-black leading-none m-0 whitespace-nowrap"
              style={{
                fontSize: "clamp(34px, 5vw, 84px)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', 'Inter', sans-serif",
              }}
            >
              designer
            </h1>
            <p
              className="text-white/40 font-normal leading-relaxed mt-2.5"
              style={{
                fontSize: "clamp(10px, 1vw, 13px)",
                maxWidth: "220px",
                fontFamily: "'Syne', 'Inter', sans-serif",
                opacity: hover === "right" ? 0 : 1,
                transition: "opacity 0.35s ease",
              }}
            >
              Product Designer specialising in UI
              <br />
              design and design systems.
            </p>
          </div>
        </div>

        {/* ── SEAM LINE ─────────────────────────────────────── */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: "50%",
            width: "1px",
            background: "rgba(255,255,255,0.18)",
            zIndex: 25,
            // Fades in after panels settle, hides during hover expand
            opacity: loaded && !hover ? 1 : 0,
            transition: "opacity 0.4s ease",
            transitionDelay: loaded && !hover ? "0.2s" : "0s",
          }}
        />

        {/* ── RIGHT PANEL ── Gamer Side ──────────────────────── */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{
            width: rightW,
            transform: loaded ? "translateX(0)" : "translateX(100%)",
            transition: panelT,
            zIndex: hover === "right" ? 20 : 10,
          }}
          onMouseEnter={() => setHover("right")}
          onMouseLeave={() => setHover(null)}
        >
          <img
            src="/Images/Gamer Side.png"
            alt="Gamer"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            style={{
              transform: "translateX(12%) scale(1.1)",
              transform: hover === "right" ? "scale(1.04)" : "scale(1)",
              transition: `transform 0.85s ${EA}`,
            }}
            draggable={false}
          />

          {/* ── Right label ── */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              right:
                hover === "right"
                  ? "clamp(40px, 6vw, 120px)"
                  : "clamp(16px, 4vw, 60px)",
              top: "50%",
              textAlign: "right",
              zIndex: 30,
              opacity: loaded ? (hover === "left" ? 0.08 : 1) : 0,
              transform: loaded
                ? hover === "right"
                  ? "translateY(-50%) translateX(-80px)"
                  : "translateY(-50%)"
                : "translateY(calc(-50% + 20px))",
              transition: labelT,
            }}
          >
            <h1
              className="text-white font-black leading-none m-0 whitespace-nowrap"
              style={{
                fontSize: "clamp(34px, 5vw, 84px)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', 'Inter', sans-serif",
              }}
            >
              gamer
            </h1>
            <p
              className="text-white/40 font-normal leading-relaxed mt-2.5"
              style={{
                fontSize: "clamp(10px, 1vw, 13px)",
                maxWidth: "220px",
                marginLeft: "auto",
                fontFamily: "'Syne', 'Inter', sans-serif",
                opacity: hover === "left" ? 0 : 1,
                transition: "opacity 0.35s ease",
              }}
            >
              Front end developer who writes
              <br />
              clean, elegant and efficient code.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          BOTTOM STRIP
      ══════════════════════════════════════════════════════════ */}
      <div
        className="flex flex-col items-center justify-center gap-2 py-5 border-t border-white/[0.06] bg-[#0a0a0b] z-30"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(10px)",
          transition: `opacity 0.7s ease 1s, transform 0.7s ${EA} 1s`,
        }}
      >
        <span
          className="text-white/20 uppercase tracking-[0.28em]"
          style={{ fontSize: "9px", fontFamily: "'Syne', sans-serif" }}
        >
          Some of my latest work
        </span>
        <svg
          className="animate-bounce"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
