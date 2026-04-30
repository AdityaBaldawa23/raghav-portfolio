"use client";

import { useState, useEffect, useRef } from "react";

const KEYFRAMES = `

  @keyframes fadeUp {
    0%   { transform: translateY(24px); opacity: 0; }
    100% { transform: translateY(0px);  opacity: 1; }
  }
  @keyframes heroIn {
    0%   { opacity: 0; filter: blur(14px) brightness(0.4); transform: scale(1.04); }
    100% { opacity: 1; filter: blur(0px)  brightness(1);   transform: scale(1); }
  }
  @keyframes seamPulse {
    0%,100% { opacity: 0.5; }
    50%      { opacity: 1; }
  }

  .hero-img-in { animation: heroIn  1.2s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
  .fade-up-0   { animation: fadeUp  0.85s cubic-bezier(0.22,1,0.36,1) 0.95s both; }
  .fade-up-1   { animation: fadeUp  0.85s cubic-bezier(0.22,1,0.36,1) 1.1s  both; }
  .fade-up-2   { animation: fadeUp  0.85s cubic-bezier(0.22,1,0.36,1) 1.25s both; }
  .seam-pulse  { animation: seamPulse 2.8s ease-in-out infinite; }
`;

const TR =
  "clip-path 1.2s cubic-bezier(0.16,1,0.3,1)," +
  "filter    1.2s cubic-bezier(0.16,1,0.3,1)," +
  "transform 1.2s cubic-bezier(0.16,1,0.3,1)";

export default function HeroSection() {
  const [hovered, setHovered] = useState(null); // "left" | "right" | null
  const [ready, setReady] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = KEYFRAMES;
    document.head.appendChild(tag);
    const t = setTimeout(() => setReady(true), 60);
    return () => {
      clearTimeout(t);
      document.head.removeChild(tag);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setHovered(x < 50 ? "left" : "right");
  };

  const lActive = hovered === "left";
  const rActive = hovered === "right";

  // ── Clip-path values ─────────────────────────────────────────────────────────
  // LEFT image: default = left 50% visible; expand on left-hover; shrink on right-hover
  const leftClip = lActive
    ? "inset(0 0 0 0)"
    : rActive
      ? "inset(0 65% 0 0)"
      : "inset(0 50% 0 0)";
  // RIGHT image: default = right 50% visible; expand on right-hover; shrink on left-hover
  const rightClip = rActive
    ? "inset(0 0 0 0)"
    : lActive
      ? "inset(0 0 0 65%)"
      : "inset(0 0 0 50%)";

  // ── Filters ──────────────────────────────────────────────────────────────────
  const leftFilter = lActive
    ? "brightness(1.13) contrast(1.05) saturate(1.1)"
    : rActive
      ? "brightness(0.45) saturate(0.5)"
      : "brightness(0.95) saturate(0.92)";
  const rightFilter = rActive
    ? "brightness(1.13) contrast(1.05) saturate(1.1)"
    : lActive
      ? "brightness(0.45) saturate(0.5)"
      : "brightness(0.95) saturate(0.92)";

  // ── Scale ────────────────────────────────────────────────────────────────────
  const leftScale = lActive
    ? "scale(1.024)"
    : rActive
      ? "scale(0.994)"
      : "scale(1)";
  const rightScale = rActive
    ? "scale(1.024)"
    : lActive
      ? "scale(0.994)"
      : "scale(1)";

  // Seam position follows the clip boundary
  const seamLeft = lActive ? "35%" : rActive ? "65%" : "50%";

  const titleStyle = {
    fontFamily: "var(--font-heading)",
    fontWeight: 300,
    fontSize: hovered
      ? "clamp(2rem, 3.6vw, 4.2rem)"
      : "clamp(1.7rem, 3.2vw, 3.65rem)",
    color: "rgba(255,255,255,1)",
    letterSpacing: "0.01em",
    lineHeight: 1.1,
    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
  };

  const subTextStyle = {
    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.5,
    maxWidth: "140px",
  };

  const metaStyle = {
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
  };

  const lineStyle = {
    display: "block",
    width: "1.8rem",
    height: "1px",
    background: "rgba(255,255,255,0.3)",
  };

  const showLeftDetails = lActive;
  const showRightDetails = rActive;
  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        overflow: "hidden",
        background: "#060606",
        cursor: "crosshair",
      }}
    >
      {/* ── Ambient dual-sided glow ────────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 22% 55%, rgba(82,222,255,0.25) 0%, transparent 52%)," +
            "radial-gradient(ellipse at 78% 55%, rgba(255,255,0,0.22)  0%, transparent 52%)",
          filter: "blur(70px)",
        }}
      />

      {/* ════════════════════ STACKED IMAGE PAIR ════════════════════════════════ */}
      {/*
        Both images sit at position:absolute, inset:0 — perfectly overlaid.
        clip-path is the ONLY thing controlling what's visible.
        objectPosition must match between both so faces align perfectly.
      */}
      <div
        className={ready ? "hero-img-in" : ""}
        style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0 }}
      >
        {/* ── LEFT IMAGE ─── shows its left half by default ─────────────────── */}
        <img
          src="/Images/Designer Side.png"
          alt="Designer"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
            clipPath: leftClip,
            filter: leftFilter,
            transform: leftScale,
            transformOrigin: "center center",
            transition: TR,
            zIndex: lActive ? 3 : 2,
          }}
          draggable={false}
        />

        {/* ── RIGHT IMAGE ── shows its right half by default ────────────────── */}
        <img
          src="/Images/Gamer side.png"
          alt="Gamer"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
            clipPath: rightClip,
            filter: rightFilter,
            transform: rightScale,
            transformOrigin: "center center",
            transition: TR,
            zIndex: rActive ? 3 : 2,
          }}
          draggable={false}
        />
      </div>

      {/* ════════════════════ SEAM LINE ═════════════════════════════════════════ */}
      {/* Thin white line that tracks the clip boundary */}
      <div
        aria-hidden
        className={hovered ? "" : "seam-pulse"}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: seamLeft,
          width: "1px",
          transform: "translateX(-50%)",
          zIndex: 12,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 18%, white 50%, rgba(255,255,255,0.85) 82%, transparent 100%)",
          transition: `left 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease`,
          opacity: hovered ? 0.12 : 0.5,
        }}
      />

      {/* Seam glow bloom */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: seamLeft,
          width: "80px",
          transform: "translateX(-50%)",
          zIndex: 11,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.22) 0%, transparent 68%)",
          filter: "blur(8px)",
          transition: `left 0.72s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease`,
          opacity: hovered ? 0 : 0.65,
        }}
      />

      {/* ════════════════════ VIGNETTE ══════════════════════════════════════════ */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 13,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 46%, transparent 30%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* ════════════════════ SIDE IDENTITY LABELS ══════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "clamp(1.5rem, 4vw, 3.5rem)",
          transform: "translateY(-50%)",
          zIndex: 20,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
        }}
      >
        {/* Title */}
        <span
          style={{
            ...titleStyle,
            transform: showLeftDetails ? "scale(1.15)" : "scale(1)",
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
          className=""
        >
          Designer
        </span>

        {/* Hidden content */}
        <div
          style={{
            opacity: showLeftDetails ? 1 : 0,
            transform: showLeftDetails ? "translateY(0px)" : "translateY(10px)",
            transition: "all 0.4s ease",
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
          }}

          className="pt-4"
        >
          <span style={subTextStyle}>
            Crafting clean, intuitive digital experiences
          </span>

          <span style={metaStyle}>UI/UX • Branding • Interaction</span>

          <span style={lineStyle} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "clamp(1.5rem, 4vw, 3.5rem)",
          transform: "translateY(-50%)",
          zIndex: 20,
          pointerEvents: "none",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.45rem",
        }}
      >
        {/* Title */}
        <span
          style={{
            ...titleStyle,
            transform: showRightDetails ? "scale(1.15)" : "scale(1)",
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Gamer
        </span>

        {/* Hidden content */}
        <div
          style={{
            opacity: showRightDetails ? 1 : 0,
            transform: showRightDetails
              ? "translateY(0px)"
              : "translateY(10px)",
            transition: "all 0.4s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.45rem",
          }}
          className="pt-4"
        >
          <span style={subTextStyle}>
            Strategic thinker with a competitive mindset
          </span>

          <span style={metaStyle}>FPS • Open World • Esports</span>

          <span style={lineStyle} />
        </div>
      </div>

      {/* ════════════════════ TOP EYEBROW ═══════════════════════════════════════ */}
      <div
        className={ready ? "fade-up-0" : ""}
        style={{
          position: "absolute",
          top: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
          opacity: 0,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            display: "block",
            width: "1.1rem",
            height: "1px",
            background: "rgba(255,255,255,0.14)",
          }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.24)",
            fontSize: "0.65rem",
            letterSpacing: "0.44em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </span>
        <span
          style={{
            display: "block",
            width: "1.1rem",
            height: "1px",
            background: "rgba(255,255,255,0.14)",
          }}
        />
      </div>

      {/* ════════════════════ BOTTOM HEADLINE ═══════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          bottom: "2.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 20,
          width: "min(680px, 88vw)",
          pointerEvents: "none",
        }}
      >
        <h1
          className={ready ? "fade-up-1" : ""}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(1.8rem, 4.5vw, 3.75rem)",
            color: "#fff",
            lineHeight: 1.06,
            letterSpacing: "-0.015em",
            margin: 0,
            opacity: 0,
            textShadow: "0 2px 30px rgba(0,0,0,0.75)",
          }}
        >
          Two worlds.{" "}
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}>
            One vision.
          </em>
        </h1>

        <p
          className={ready ? "fade-up-2" : ""}
          style={{
            fontFamily: "var(--font-heading)",
            color: "rgba(255,255,255,0.2)",
            fontSize: "0.62rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginTop: "0.8rem",
            opacity: 0,
          }}
        >
          Hover to explore
        </p>
      </div>

      {/* ════════════════════ BOTTOM EDGE ═══════════════════════════════════════ */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.07) 70%, transparent 100%)",
          zIndex: 20,
        }}
      />
    </section>
  );
}
