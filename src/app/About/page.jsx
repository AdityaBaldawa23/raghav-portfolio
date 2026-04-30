"use client";

import { TimelineDemo } from "@/Components/UI/Experience";
import { useState } from "react";

const C = "#52deff";
const Y = "#ffff00";

// const glow = (color, spread = 24) => ({
//   boxShadow: `0 0 ${spread}px 2px ${color}55, 0 0 ${spread * 2.5}px 4px ${color}22`,
// });
// c(color) => ({
//   textShadow: `0 0 20px ${color}dd, 0 0 50px ${color}55`,
// });

export default function AboutMe() {
  const [activePersona, setActivePersona] = useState(null);
  const [hoveredHobby, setHoveredHobby] = useState(null);


  const hobbies = [
    {
      name: "Open World RPGs",
      type: "gamer",
      icon: "◎",
      desc: "Lost in Elden Ring for 300+ hours",
      color: Y,
    },
    {
      name: "Trying Motion Design",
      type: "designer",
      icon: "✦",
      desc: "Breathing life into static pixels",
      color: C,
    },
    {
      name: "Chill FPS",
      type: "gamer",
      icon: "⊕",
      desc: "Headshots & clutch rounds only",
      color: Y,
    },
    {
      name: "Brand Systems",
      type: "designer",
      icon: "◫",
      desc: "Obsessive about cohesion & kerning",
      color: C,
    },
    {
      name: "Game Lore Deep Dives",
      type: "gamer",
      icon: "◐",
      desc: "4am wiki rabbit holes",
      color: Y,
    },
    {
      name: "Type Specimen Hunting",
      type: "designer",
      icon: "Aa",
      desc: "Fonts are personalities, fight me",
      color: C,
    },
  ];

  const fusions = [
    { game: "Level Design", design: "Information Architecture" },
    { game: "HUD Clarity", design: "UI Hierarchy" },
    { game: "Speedrunning", design: "Design Sprints" },
    { game: "World-Building", design: "Brand Universes" },
  ];

  const styleWords = [
    {
      word: "MINIMAL",
      sub: "No clutter. Ever.",
      color: C,
      span: "md:col-span-2",
    },
    { word: "BOLD", sub: "Make it land.", color: C, span: "" },
    { word: "RAW", sub: "Authentic ≠ messy.", color: Y, span: "" },
    { word: "PRECISE", sub: "8px grid always.", color: C, span: "" },
    { word: "DARK", sub: "Light mode is a myth.", color: Y, span: "" },
    {
      word: "EXPERIMENTAL",
      sub: "Rules ≠ limits.",
      color: Y,
      span: "md:col-span-2",
    },
  ];

  return (
    <div
      className="min-h-screen w-full text-white overflow-x-hidden"
      style={{ background: "#050505", fontFamily: "var(--font-body)" }}
    >
      {/* ═══════════════ HERO ═══════════════ */}
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "#080808",
          overflow: "hidden",
          display: "flex",
          alignItems: "stretch",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Google Fonts */}
        <style>{`
          .hero-scanning-line {
            position: absolute;
            left: 0; right: 0;
            height: 1px;
            background: rgba(40,255,255,0.15);
            z-index: 15;
            animation: heroScan 7s linear infinite;
            pointer-events: none;
          }
          @keyframes heroScan {
            0%   { top: 0%; opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          .hero-name-word {
            transition: letter-spacing 0.4s ease;
          }
          .hero-name-word:hover {
            letter-spacing: 0.08em;
          }

          .hero-tag {
            font-size: 9px;
            letter-spacing: 0.28em;
            padding: 5px 11px;
            border: 0.5px solid;
            font-weight: 400;
            text-transform: uppercase;
            transition: transform 0.2s ease, opacity 0.2s ease;
            cursor: default;
          }
          .hero-tag:hover {
            transform: translateY(-2px);
            opacity: 1 !important;
          }
        `}</style>

        {/* Noise texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            backgroundImage: `linear-gradient(rgba(40,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Diagonal right panel — shifted to start at ~60% */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "52%",
            background: "linear-gradient(108deg, #0d0d0d 0%, #0a0a0a 100%)",
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            zIndex: 2,
          }}
        />

        {/* Diagonal accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "52%",
            clipPath: "polygon(15% 0%, 17% 0%, 2% 100%, 0% 100%)",
            background: "#28deff",
            zIndex: 3,
            opacity: 0.9,
          }}
        />

        {/* Scanning line */}
        <div className="hero-scanning-line" />

        {/* Corner marks */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 16,
            height: 16,
            borderTop: "1px solid rgba(40,255,255,0.9)",
            borderLeft: "1px solid rgba(40,255,255,0.9)",
            zIndex: 20,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 16,
            height: 16,
            borderBottom: "1px solid rgba(255,214,0,0.35)",
            borderRight: "1px solid rgba(255,214,0,0.35)",
            zIndex: 20,
          }}
        />

        {/* Ghost "ASAWA" behind image */}
        <div
          style={{
            position: "absolute",
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(80px, 14vw, 150px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            pointerEvents: "none",
            zIndex: 4,
            right: "2%",
            bottom: -8,
            color: "transparent",
            WebkitTextStroke: "1px rgba(40,255,255,0.4)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          ASAWA
        </div>

        {/* Image zone — 40% wide, pinned right */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            zIndex: 5,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img
            src="/Images/Gamer side1.png"
            alt="Raghav Asawa"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center bottom",
              filter: "contrast(1.05) brightness(0.95)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 6%, black 18%, black 82%, transparent 100%), linear-gradient(to top, black 60%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 6%, black 18%, black 82%, transparent 100%), linear-gradient(to top, black 60%, transparent 100%)",
              WebkitMaskComposite: "source-in",
            }}
          />
        </div>

        {/* LVL stat — floating top-right */}
        <div
          style={{
            position: "absolute",
            zIndex: 12,
            right: "3%",
            top: "16%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 48,
              lineHeight: 1,
              color: "#ffff00",
              letterSpacing: "0.04em",
            }}
          >
            22
          </span>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              color: "#ffffff",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Level · Active
          </span>
        </div>

        {/* Rotated side label — sits near the diagonal boundary */}
        <div
          style={{
            position: "absolute",
            left: "60%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            fontSize: 8,
            letterSpacing: "0.5em",
            color: "rgba(40,255,255,0.13)",
            fontWeight: 300,
            zIndex: 6,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          Design × Gameplay · Portfolio
        </div>

        {/* Bottom gradient strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,255,200,0.2) 30%, rgba(255,214,0,0.2) 70%, transparent 100%)",
            zIndex: 20,
          }}
        />

        {/* ── LEFT COLUMN — 60% wide ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 0 60px 52px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.45em",
              color: "#28deff",
              marginBottom: 28,
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 300,
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                display: "block",
                width: 28,
                height: 1,
                background: "#28deff",
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
            Raghav Asawa
          </div>

          {/* Big headline */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(72px, 10vw, 112px)",
              lineHeight: 0.88,
              margin: "0 0 4px",
              letterSpacing: "0.01em",
              cursor: "default",
              userSelect: "none",
            }}
          >
            <span
              className="hero-name-word"
              style={{ display: "block", color: "#f2f2f2" }}
            >
              DESIGN
            </span>
            <span
              className="hero-name-word"
              style={{ display: "block", color: "#28deff" }}
            >
              THAT
            </span>
            <span
              className="hero-name-word"
              style={{ display: "block", color: "#f2f2f2" }}
            >
              HITS.
            </span>
          </h1>

          {/* Role line */}
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "#ffffff",
              margin: "18px 0 0",
              fontWeight: 300,
              textTransform: "uppercase",
            }}
          >
            Graphic Designer · Gamer · Frame Builder
          </p>

          {/* Tags */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 28 }}
          >
            {[
              { label: "Visual Editor", color: "#28deff" },
              { label: "FPS Grinder", color: "#ffff00" },
              { label: "Type Obsessed", color: "#28deff" },
              { label: "Dark Mode Only", color: "#ffff00" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="hero-tag"
                style={{
                  borderColor: `${color}33`,
                  color: `${color}aa`,
                  opacity: 0.85,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              marginTop: 26,
              fontSize: 12,
              lineHeight: 1.9,
              color: "#ffffff",
              maxWidth: 300,
              fontWeight: 300,
            }}
          >
            Crafting interfaces by day.
            <br />
            Surviving{" "}
            <em style={{ fontStyle: "italic", color: "#ffff00" }}>Sekiro</em>,
            clutching{" "}
            <em style={{ fontStyle: "italic", color: "#28deff" }}>Valorant</em>,
            <br />
            exploring{" "}
            <em style={{ fontStyle: "italic", color: "#ffff00" }}>Palworld</em> by
            night.
            <br />
            <br />
            My cursor is both a tool and a weapon.
          </p>
        </div>
      </section>
      {/* ═══════════════ DUAL PERSONALITY ═══════════════ */}
      <section className="px-6 mt-8" style={{ background: "none" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] mb-4"
              style={{ color: "#ffffff" }}
            >
              DUAL CORE PROCESSOR
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              One Mind. Two Modes.
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ background: "#1a1a1a" }}
          >
            {/* MODE 01 — DESIGNER — CYAN */}
            <div
              className="relative p-10 md:p-14 cursor-default transition-all duration-500 group"
              style={{ background: "#050505" }}
              onMouseEnter={() => setActivePersona("designer")}
              onMouseLeave={() => setActivePersona(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${C}0d, transparent 70%)`,
                }}
              />
              <div
                className="absolute top-0 left-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 0 0, ${C}18, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs tracking-[0.3em] px-3 py-1.5 rounded-full border font-bold transition-all duration-300"
                    style={{
                      color: activePersona === "designer" ? C : "#333",
                      borderColor:
                        activePersona === "designer" ? `${C}55` : "#222",
                      background:
                        activePersona === "designer" ? `${C}10` : "transparent",
                    }}
                  >
                    MODE 01
                  </span>
                </div>
                <h3
                  className="text-5xl md:text-6xl font-black mb-5 transition-all duration-400"
                  style={{
                    color: activePersona === "designer" ? C : "#252525",
                    ...(activePersona === "designer" ? {} : {}),
                  }}
                >
                  THE
                  <br />
                  DESIGNER
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8 max-w-sm"
                  style={{ color: "#666" }}
                >
                  I design and edit across different things, not just one type.
                  I focus on how everything comes together, spacing, alignment,
                  and overall feel. I like keeping things clean but still
                  impactful. I keep adjusting till it actually looks right.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Editing",
                    "Visual Design",
                    "Typography",
                    "Layouts",
                    "Creative Work",
                  ].map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105"
                      style={{
                        borderColor: `${C}33`,
                        color: `${C}99`,
                        background: `${C}08`,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background:
                    activePersona === "designer"
                      ? `linear-gradient(90deg, transparent, ${C}, transparent)`
                      : "transparent",
                }}
              />
            </div>

            {/* MODE 02 — GAMER — YELLOW */}
            <div
              className="relative p-10 md:p-14 cursor-default transition-all duration-500 group"
              style={{ background: "#050505" }}
              onMouseEnter={() => setActivePersona("gamer")}
              onMouseLeave={() => setActivePersona(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(225deg, ${Y}0a, transparent 70%)`,
                }}
              />
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 0, ${Y}18, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs tracking-[0.3em] px-3 py-1.5 rounded-full border font-bold transition-all duration-300"
                    style={{
                      color: activePersona === "gamer" ? Y : "#333",
                      borderColor:
                        activePersona === "gamer" ? `${Y}55` : "#222",
                      background:
                        activePersona === "gamer" ? `${Y}10` : "transparent",
                    }}
                  >
                    MODE 02
                  </span>
                </div>
                <h3
                  className="text-5xl md:text-6xl font-black mb-5 transition-all duration-400"
                  style={{
                    color: activePersona === "gamer" ? Y : "#252525",
                    ...(activePersona === "gamer" ? {} : {}),
                  }}
                >
                  THE
                  <br />
                  GAMER
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8 max-w-sm"
                  style={{ color: "#666" }}
                >
                  I play a lot, mainly FPS and open-world games like Sekiro,
                  Valorant, Palworld, and Minecraft. I enjoy the grind, learning
                  patterns, and improving over time. Losing is fine, I just
                  don’t stop till I get it right.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sekiro",
                    "Valorant",
                    "Palworld",
                    "Minecraft",
                    "FPS & Survival",
                  ].map((g) => (
                    <span
                      key={g}
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105"
                      style={{
                        borderColor: `${Y}33`,
                        color: `${Y}99`,
                        background: `${Y}08`,
                      }}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background:
                    activePersona === "gamer"
                      ? `linear-gradient(90deg, transparent, ${Y}, transparent)`
                      : "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Time Line ═══════════════ */}

      <TimelineDemo />

      {/* ═══════════════ HOBBIES ═══════════════ */}
      <section className="py-12 px-6" style={{ background: "#050505" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p
              className="text-xs tracking-[0.4em] mb-2"
              style={{ color: "#444" }}
            >
              OFFLINE ACTIVITIES
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              When Not Working
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hobbies.map(({ name, type, icon, desc, color }, i) => (
              <div
                key={name}
                className="group relative p-7 rounded-2xl border cursor-default transition-all duration-400 hover:-translate-y-3"
                style={{
                  borderColor: hoveredHobby === i ? `${color}44` : `${color}18`,
                  background: hoveredHobby === i ? `${color}08` : "#080808",
                }}
                onMouseEnter={() => setHoveredHobby(i)}
                onMouseLeave={() => setHoveredHobby(null)}
              >
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-3xl font-black transition-all duration-300 group-hover:scale-125"
                    style={{ color: hoveredHobby === i ? color : "#333" }}
                  >
                    {icon}
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold tracking-wider"
                    style={{
                      background: `${color}15`,
                      color: `${color}bb`,
                      border: `1px solid ${color}22`,
                    }}
                  >
                    {type === "gamer" ? "⚡ GAMER" : "✦ DESIGN"}
                  </span>
                </div>
                <div
                  className="font-bold text-sm mb-1.5"
                  style={{ color: "#ddd" }}
                >
                  {name}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: "#555" }}
                >
                  {desc}
                </div>
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-400 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CURRENT MISSION ═══════════════ */}
      <section className="py-16 px-6" style={{ background: "#080808" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.4em] mb-2"
              style={{ color: "#444" }}
            >
              ACTIVE QUEST
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              Current Mission
            </h2>
          </div>

          <div
            className="relative p-px rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${C}, #111 40%, ${Y})`,
            }}
          >
            <div
              className="rounded-2xl p-8 md:p-14"
              style={{ background: "#060606" }}
            >
              <div className="flex items-start gap-5 mb-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black shrink-0"
                  style={{
                    background: `${C}18`,
                    color: C,
                    border: `1px solid ${C}33`,
                  }}
                >
                  ◈
                </div>
                <div>
                  <div
                    className="text-xs tracking-widest mb-2 font-bold"
                    style={{ color: C }}
                  >
                    MAIN QUEST — PRIORITY: LEGENDARY
                  </div>
                  <div
                    className="text-lg md:text-xl font-black"
                    style={{ color: "#eee" }}
                  >
                    Build the portfolio that breaks the internet (respectfully).
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  {
                    obj: "Destroyed my sleep schedule and still functioning somehow.",
                    done: true,
                    color: C,
                  },
                  {
                    obj: "Survived my first job for a full year without quitting mid-week.",
                    done: true,
                    color: C,
                  },
                  {
                    obj: "Become rich enough to buy skins without checking the price.",
                    done: false,
                    color: Y,
                  },
                  {
                    obj: "Earn money while saying “I was just playing games.",
                    done: false,
                    color: Y,
                  },
                  {
                    obj: "Build a setup so clean it looks illegal.",
                    done: false,
                    color: Y,
                  },
                ].map(({ obj, done, color }) => (
                  <div key={obj} className="group/obj flex items-start gap-4">
                    <div
                      className="mt-0.5 w-5 h-5 rounded shrink-0 flex items-center justify-center text-xs transition-all duration-300"
                      style={{
                        background: done ? `${color}22` : "transparent",
                        border: `1px solid ${color}55`,
                        color: done ? color : `${color}44`,
                      }}
                    >
                      {done ? "✓" : "·"}
                    </div>
                    <span
                      className="text-sm transition-all duration-300 group-hover/obj:translate-x-1"
                      style={{ color: done ? "#888" : "#555" }}
                    >
                      {obj}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div
                  className="flex justify-between text-xs mb-3"
                  style={{ color: "#444" }}
                >
                  <span className="tracking-widest">QUEST PROGRESS</span>
                  <span className="font-bold" style={{ color: C }}>
                    40% COMPLETE
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "#141414" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "40%",
                      background: `linear-gradient(90deg, ${C}, ${Y})`,
                      boxShadow: `0 0 16px ${C}88`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
