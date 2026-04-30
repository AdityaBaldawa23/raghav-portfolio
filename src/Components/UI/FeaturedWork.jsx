"use client";

import { useState } from "react";
import Link from "next/link";

/*
  ─── FONTS ──────────────────────────────────────────────────────────────────────
  Add to your globals.css or app/layout.js:
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Geist+Mono:wght@300;400&display=swap');

  ─── IMAGES ─────────────────────────────────────────────────────────────────────
  Replace each `image` value with your own asset path, e.g.:
    image: "/work/logos-bg.jpg"
  Place files in /public/work/ for Next.js static serving.

  ─── PALETTE ────────────────────────────────────────────────────────────────────
  Cyan   #22d3ee  →  accent for Logo + Posters panels
  Yellow #facc15  →  accent for Brand Work panel
  White  used only for text
*/

// ─── Panel data ────────────────────────────────────────────────────────────────
const PANELS = [
  {
    id: "logos",
    href: "/Portfolio",
    index: "01",
    title: "Logo",
    titleItalic: "Design",
    sub: "Mark & Identity",
    desc: "Symbols distilled to their irreducible form.",
    stat: "40+ marks",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
    accent: "cyan",
  },
  {
    id: "brand",
    href: "/Branding",
    index: "02",
    title: "Brand",
    titleItalic: "Work",
    sub: "Systems & Strategy",
    desc: "Coherent visual languages built to endure.",
    stat: "25+ systems",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=80",
    accent: "yellow",
  },
  {
    id: "posters",
    href: "/Portfolio",
    index: "03",
    title: "Poster",
    titleItalic: "Art",
    sub: "Print & Editorial",
    desc: "Compositions that arrest and linger.",
    stat: "60+ prints",
    image:
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=900&q=80",
    accent: "cyan",
  },
];

// ─── Accent token maps ─────────────────────────────────────────────────────────
const A = {
  cyan: {
    border: "rgba(34,211,238,0.6)",
    borderHover: "rgba(34,211,238,0.52)",
    glowBase: "0 0 40px -10px rgba(34,211,238,0.08)",
    glowHover: "0 0 56px -8px rgba(34,211,238,0.18)",
    topLine:
      "linear-gradient(90deg,transparent,rgba(34,211,238,0.72) 50%,transparent)",
    rule: "rgba(34,211,238,0.58)",
    index: "rgba(34,211,238,1)",
    italic: "rgba(34,211,238,0.88)",
    cta: "rgba(34,211,238,0.82)",
  },
  yellow: {
    border: "rgba(250,204,21,0.9)",
    borderHover: "rgba(250,204,21,0.46)",
    glowBase: "0 0 40px -10px rgba(250,204,21,0.06)",
    glowHover: "0 0 56px -8px rgba(250,204,21,0.14)",
    topLine:
      "linear-gradient(90deg,transparent,rgba(250,204,21,0.68) 50%,transparent)",
    rule: "rgba(250,204,21,0.55)",
    index: "rgba(250,204,21,0.72)",
    italic: "rgba(250,204,21,0.85)",
    cta: "rgba(250,204,21,0.8)",
  },
};

const EASE = "cubic-bezier(0.16,1,0.3,1)";

// ─── Panel ─────────────────────────────────────────────────────────────────────
function Panel({ panel, isHovered, anyHovered, onEnter, onLeave }) {
  const receding = anyHovered && !isHovered;
  const acc = A[panel.accent];

  // ── Wrapper transitions ──
  const wrapperStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
    borderRadius: "1.25rem",
    minHeight: "clamp(300px, 46vh, 500px)",
    cursor: "pointer",

    border: `1px solid ${isHovered ? acc.borderHover : acc.border}`,
    boxShadow: [
      isHovered
        ? "0 28px 72px -16px rgba(0,0,0,0.8)"
        : "0 10px 40px -10px rgba(0,0,0,0.6)",
      isHovered ? acc.glowHover : acc.glowBase,
    ].join(", "),
    transform: isHovered
      ? "scale(1.02) translateY(-2px)"
      : receding
        ? "scale(0.988)"
        : "scale(1)",
    opacity: receding ? 0.42 : 1,

    transition: [
      `transform 0.48s ${EASE}`,
      "opacity 0.38s ease",
      "border-color 0.42s ease",
      "box-shadow 0.48s ease",
    ].join(", "),
  };

  // ── Layer 1: background image ──
  const bgStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${panel.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Default: heavily blurred, darkened, zoomed out slightly
    // Hover:   less blur, more brightness, zooms in gently
    filter: isHovered
      ? "blur(5px) brightness(0.52)"
      : "blur(16px) brightness(0.3)",
    transform: isHovered ? "scale(1.07)" : "scale(1.15)",
    opacity: isHovered ? 0.6 : 0.28,
    transition: [
      `filter 0.6s ${EASE}`,
      `transform 0.7s ${EASE}`,
      "opacity 0.55s ease",
    ].join(", "),
    willChange: "transform, filter, opacity",
  };

  // ── Layer 2: overlay gradient ──
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: isHovered
      ? "linear-gradient(155deg, rgba(6,6,10,0.7) 0%, rgba(6,6,10,0.52) 55%, rgba(6,6,10,0.76) 100%)"
      : "linear-gradient(155deg, rgba(6,6,10,0.84) 0%, rgba(6,6,10,0.7) 55%, rgba(6,6,10,0.9) 100%)",
    transition: "background 0.52s ease",
  };

  return (
    <Link
      href={panel.href}
      style={{ textDecoration: "none", display: "flex", flex: "1 1 0%" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={wrapperStyle}>
        {/* ── LAYER 1: Background image ──────────────────────────────────────── */}
        <div aria-hidden="true" style={bgStyle} />

        {/* ── LAYER 2: Dark overlay ──────────────────────────────────────────── */}
        <div aria-hidden="true" style={overlayStyle} />

        {/* ── Hover: top accent line ─────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background: acc.topLine,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.45s ease",
            zIndex: 5,
          }}
        />

        {/* ── LAYER 3: Content ───────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "clamp(1.75rem, 2.8vw, 2.4rem)",
          }}
        >
          {/* Index */}
          <div
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              color: isHovered ? acc.index : "rgba(255,255,255,0.22)",
              transition: "color 0.38s ease",
              marginBottom: "clamp(2.5rem,5.5vh,4rem)",
            }}
          >
            {panel.index}
          </div>

          {/* Title block */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {/* Expanding accent rule */}
            <div
              style={{
                height: "1px",
                marginBottom: "1.2rem",
                background: isHovered
                  ? `linear-gradient(90deg,${acc.rule},transparent)`
                  : "rgba(255,255,255,0.1)",
                width: isHovered ? "3rem" : "1.5rem",
                transition: `width 0.48s ${EASE}, background 0.42s ease`,
              }}
            />

            {/* Subtitle */}
            <p
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                margin: "0 0 0.55rem",
              }}
            >
              {panel.sub}
            </p>

            {/* Main title */}
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "clamp(2rem,3.2vw,3.1rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.022em",
                color: isHovered
                  ? "rgba(255,255,255,0.97)"
                  : "rgba(255,255,255,0.76)",
                margin: "0 0 0.85rem",
                transition: "color 0.38s ease",
              }}
            >
              {panel.title}{" "}
              <em
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  color: isHovered ? acc.italic : "rgba(255,255,255,0.32)",
                  transition: "color 0.38s ease",
                }}
              >
                {panel.titleItalic}
              </em>
            </h2>

            {/* Description */}
            <p
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(0.88rem,1.15vw,1rem)",
                lineHeight: 1.65,
                color: isHovered
                  ? "rgba(255,255,255,0.44)"
                  : "rgba(255,255,255,0.25)",
                margin: 0,
                transition: "color 0.38s ease",
              }}
            >
              {panel.desc}
            </p>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: "clamp(2rem,4.5vh,3rem)",
              paddingTop: "1.1rem",
              borderTop: `1px solid ${
                isHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"
              }`,
              transition: "border-color 0.38s ease",
            }}
          >
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isHovered
                  ? "rgba(255,255,255,0.32)"
                  : "rgba(255,255,255,0.14)",
                transition: "color 0.38s ease",
              }}
            >
              {panel.stat}
            </span>

            {/* View Work CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                transition: `opacity 0.38s ease 0.08s, transform 0.44s ${EASE} 0.08s`,
              }}
            >
              <span
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: acc.cta,
                }}
              >
                View Work
              </span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 5.5h8M6.5 2l3 3.5-3 3.5"
                  stroke={acc.cta}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function WorkSection() {
  const [hovered, setHovered] = useState(null);
  const anyHovered = hovered !== null;

  return (
    <>
      <style>{`
        @media (max-width: 680px) {
          .work-panels { flex-direction: column !important; }
          .work-panels > a { flex: none !important; }
        }
      `}</style>

      <section
        style={{
          width: "100%",
          minHeight: "100svh",
          background: "#0a0a0c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3.5rem,8vh,6.5rem) clamp(1.5rem,5vw,4.5rem)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "clamp(2rem,4.5vh,3.5rem)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "1.2rem",
                  height: "1px",
                  background: "rgba(34,211,238,0.9)",
                }}
              />
              <span
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,1)",
                }}
              >
                Selected Work
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "clamp(2rem,4.5vw,3.8rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                color: "rgba(255,255,255,0.92)",
                margin: 0,
              }}
            >
              The work{" "}
              <em style={{ fontStyle: "italic", color: "rgba(34,211,238,1)" }}>
                speaks.
              </em>
            </h1>
          </div>

          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.4 rem",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Hover to explore each discipline
          </p>
        </div>

        {/* Panels */}
        <div
          className="work-panels"
          style={{
            display: "flex",
            gap: "clamp(0.75rem,1.4vw,1.15rem)",
          }}
        >
          {PANELS.map((panel) => (
            <Panel
              key={panel.id}
              panel={panel}
              isHovered={hovered === panel.id}
              anyHovered={anyHovered}
              onEnter={() => setHovered(panel.id)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "clamp(1.25rem,3vh,2rem)",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.14)",
            }}
          >
            2024 — Present
          </span>
          <div style={{ display: "flex", gap: "2rem" }}>
            {PANELS.map((p) => (
              <span
                key={p.id}
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.12)",
                }}
              >
                {p.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
