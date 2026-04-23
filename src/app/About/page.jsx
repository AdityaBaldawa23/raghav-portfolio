"use client";

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
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredHobby, setHoveredHobby] = useState(null);

  const stats = [
    { label: "Hours Designing", value: "2,400+", icon: "✦", color: C },
    { label: "Projects Shipped", value: "1000+", icon: "◈", color: C },
    { label: "Rage Quits Survived", value: "∞", icon: "⚡", color: Y },
    { label: "Diet Coke/Monster Cans", value: "4/day", icon: "◉", color: C },
    { label: "Sleep Hours Lost", value: "Too Many", icon: "◐", color: Y },
    { label: "Boss Fights Won", value: "312", icon: "★", color: Y },
    { label: "Photoshop/Illustrator Layers", value: "∞", icon: "▣", color: C },
    { label: "Level (Life)", value: "22", icon: "▲", color: Y },
  ];

  const hobbies = [
    { name: "Open World RPGs", type: "gamer", icon: "◎", desc: "Lost in Elden Ring for 300+ hours", color: Y },
    { name: "Trying Motion Design", type: "designer", icon: "✦", desc: "Breathing life into static pixels", color: C },
    { name: "Chill FPS", type: "gamer", icon: "⊕", desc: "Headshots & clutch rounds only", color: Y },
    { name: "Brand Systems", type: "designer", icon: "◫", desc: "Obsessive about cohesion & kerning", color: C },
    { name: "Game Lore Deep Dives", type: "gamer", icon: "◐", desc: "4am wiki rabbit holes", color: Y },
    { name: "Type Specimen Hunting", type: "designer", icon: "Aa", desc: "Fonts are personalities, fight me", color: C },
  ];

  const philosophy = [
    { quote: "Design is the only cheat code that works in real life.", accent: C },
    { quote: "Every pixel is a decision. Every decision is a statement.", accent: C },
    { quote: "Respawn. Redesign. Repeat.", accent: Y },
  ];

  const fusions = [
    { game: "Level Design", design: "Information Architecture" },
    { game: "HUD Clarity", design: "UI Hierarchy" },
    { game: "Speedrunning", design: "Design Sprints" },
    { game: "World-Building", design: "Brand Universes" },
  ];

  const styleWords = [
    { word: "MINIMAL", sub: "No clutter. Ever.", color: C, span: "md:col-span-2" },
    { word: "BOLD", sub: "Make it land.", color: C, span: "" },
    { word: "RAW", sub: "Authentic ≠ messy.", color: Y, span: "" },
    { word: "PRECISE", sub: "8px grid always.", color: C, span: "" },
    { word: "DARK", sub: "Light mode is a myth.", color: Y, span: "" },
    { word: "EXPERIMENTAL", sub: "Rules ≠ limits.", color: Y, span: "md:col-span-2" },
  ];

  return (
    <div
      className="min-h-screen w-full text-white overflow-x-hidden"
      style={{ background: "#050505", fontFamily: "'DM Mono','Courier New',monospace" }}
    >

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${C}28 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${C}07 0%, transparent 50%, ${Y}05 100%)` }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-125 h-125 rounded-full blur-[100px] pointer-events-none"
          style={{ background: C, opacity: 0.08 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[80px] pointer-events-none"
          style={{ background: Y, opacity: 0.08 }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 text-xs tracking-[0.4em] mb-8 px-5 py-2.5 border rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                style={{ color: C, borderColor: `${C}44`, background: `${C}08` }}
              >
                <span style={{ color: Y }}>◈</span> DESIGNER · GAMER · FRAME BUILDER
              </div>

              <h1
                className="font-black leading-[0.85] mb-8 tracking-tighter cursor-default select-none"
                style={{ fontSize: "clamp(4rem, 11vw, 9rem)" }}
              >
                <span
                  className="block transition-all duration-500 hover:tracking-wide"
                  style={{ color: "#F0F0F0" }}
                >
                  RAGHAV
                </span>
                <span
                  className="block transition-all duration-500 hover:tracking-wide"
                  style={{ color: C }}
                >
                  ASAWA
                </span>
              </h1>

              <p
                className="text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
                style={{ color: "#666", letterSpacing: "0.04em" }}
              >
                Crafting interfaces by day. Surviving Sekiro, clutching Valorant, and exploring Palworld by night. Where{" "}
                <span style={{ color: C }}>Design</span> meets high-stakes{" "}
                <span style={{ color: Y }}>Gameplay</span>.
                My cursor is both a tool and a weapon.
              </p>

              <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
                {["Visual Editor", "FPS Grinder", "Type Obsessed", "Dark Mode Only"].map((tag, i) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default"
                    style={{
                      borderColor: i % 2 === 0 ? `${C}44` : `${Y}44`,
                      color: i % 2 === 0 ? `${C}bb` : `${Y}bb`,
                      background: i % 2 === 0 ? `${C}08` : `${Y}08`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 relative group">
              <div
                className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${C}20, transparent, ${Y}20)` }}
              />
              <div
                className="relative w-60 h-80 md:w-84 md:h-124 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105"
              >
                <img
                  src="/Images/ME.jpeg"
                  alt="RAGHAV ASAWA"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-40"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0"
                  style={{ background: `linear-gradient(to top, #050505f0 40%, transparent)` }}
                >
                  <span className="text-xs tracking-widest mb-1 font-bold" style={{ color: C }}>Raghav Asawa</span>
                  <span className="text-white text-sm font-bold">Graphic Designer & Gamer</span>
                  <span className="text-xs mt-1.5" style={{ color: "#777" }}>Designing by day · Questing by night</span>
                </div>
                <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2" style={{ borderColor: C }} />
                <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2" style={{ borderColor: C }} />
                <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2" style={{ borderColor: Y }} />
                <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2" style={{ borderColor: Y }} />
              </div>
              <div
                className="absolute -bottom-5 -right-5 w-16 h-16 rounded-xl flex flex-col items-center justify-center text-black font-black cursor-default transition-all duration-300 hover:scale-110 hover:rotate-3"
                style={{ background: Y}}
              >
                <span className="text-xs leading-none">LVL</span>
                <span className="text-xl leading-none">22</span>
              </div>
              <div
                className="absolute -top-4 -left-4 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider cursor-default"
                style={{ background: `${C}30`, color: C, border: `1px solid ${C}44` }}
              >
                ◈ PRO
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════ DUAL PERSONALITY ═══════════════ */}
      <section className="px-6" style={{ background: "#080808" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>DUAL CORE PROCESSOR</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">One Mind. Two Modes.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden" style={{ background: "#1a1a1a" }}>

            {/* MODE 01 — DESIGNER — CYAN */}
            <div
              className="relative p-10 md:p-14 cursor-default transition-all duration-500 group"
              style={{ background: "#050505" }}
              onMouseEnter={() => setActivePersona("designer")}
              onMouseLeave={() => setActivePersona(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${C}0d, transparent 70%)` }}
              />
              <div
                className="absolute top-0 left-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 0 0, ${C}18, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs tracking-[0.3em] px-3 py-1.5 rounded-full border font-bold transition-all duration-300"
                    style={{
                      color: activePersona === "designer" ? C : "#333",
                      borderColor: activePersona === "designer" ? `${C}55` : "#222",
                      background: activePersona === "designer" ? `${C}10` : "transparent",
                    }}
                  >
                    MODE 01
                  </span>
                  <span className="text-3xl transition-all duration-300" style={{ color: activePersona === "designer" ? C : "#222" }}>✦</span>
                </div>
                <h3
                  className="text-5xl md:text-6xl font-black mb-5 tracking-tighter transition-all duration-400"
                  style={{
                    color: activePersona === "designer" ? C : "#252525",
                    ...(activePersona === "designer" ? {} : {}),
                  }}
                >
                  THE<br />DESIGNER
                </h3>
                <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "#666" }}>
                  I design and edit across different things, not just one type. I focus on how everything comes together, spacing, alignment, and overall feel. I like keeping things clean but still impactful. I keep adjusting till it actually looks right.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Editing", "Visual Design", "Typography", "Layouts", "Creative Work"].map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105"
                      style={{ borderColor: `${C}33`, color: `${C}99`, background: `${C}08` }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background: activePersona === "designer"
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
                style={{ background: `linear-gradient(225deg, ${Y}0a, transparent 70%)` }}
              />
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 100% 0, ${Y}18, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs tracking-[0.3em] px-3 py-1.5 rounded-full border font-bold transition-all duration-300"
                    style={{
                      color: activePersona === "gamer" ? Y : "#333",
                      borderColor: activePersona === "gamer" ? `${Y}55` : "#222",
                      background: activePersona === "gamer" ? `${Y}10` : "transparent",
                    }}
                  >
                    MODE 02
                  </span>
                  <span className="text-3xl transition-all duration-300" style={{ color: activePersona === "gamer" ? Y : "#222" }}>⚡</span>
                </div>
                <h3
                  className="text-5xl md:text-6xl font-black mb-5 tracking-tighter transition-all duration-400"
                  style={{
                    color: activePersona === "gamer" ? Y : "#252525",
                    ...(activePersona === "gamer" ? {} : {}),
                  }}
                >
                  THE<br />GAMER
                </h3>
                <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "#666" }}>
                  I play a lot, mainly FPS and open-world games like Sekiro, Valorant, Palworld, and Minecraft. I enjoy the grind, learning patterns, and improving over time. Losing is fine, I just don’t stop till I get it right.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Sekiro", "Valorant", "Palworld", "Minecraft", "FPS & Survival"].map((g) => (
                    <span
                      key={g}
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105"
                      style={{ borderColor: `${Y}33`, color: `${Y}99`, background: `${Y}08` }}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background: activePersona === "gamer"
                    ? `linear-gradient(90deg, transparent, ${Y}, transparent)`
                    : "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════ VISUAL IDENTITY ═══════════════ */}
      <section className="py-12 px-6" style={{ background: "#050505" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
            <div>
              <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>VISUAL DNA</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Style System</h2>
            </div>
            <p className="text-xs max-w-xs md:text-right" style={{ color: "#444" }}>
              The design language I speak — and the rules I love to bend.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {styleWords.map(({ word, sub, color, span }) => (
              <div
                key={word}
                className={`group relative p-6 rounded-xl border cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${span}`}
                style={{ borderColor: `${color}22`, background: `${color}05` }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none"
                  style={{ background: `${color}0d`}}
                />
                <div
                  className="text-xl md:text-2xl font-black tracking-tight mb-2 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color }}
                >
                  {word}
                </div>
                <div className="text-xs" style={{ color: "#444" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ PHILOSOPHY ═══════════════ */}
      <section className="py-20 px-6" style={{ background: "#080808" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>OPERATING PRINCIPLES</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Creative Philosophy</h2>
          </div>
          <div className="space-y-4">
            {philosophy.map(({ quote, accent }, i) => (
              <div
                key={i}
                className="group relative pl-8 pr-8 py-10 rounded-2xl border cursor-default transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
                style={{ borderColor: `${accent}18`, background: `${accent}04` }}
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-500 group-hover:top-0 group-hover:bottom-0"
                  style={{ background: accent, opacity: 0.7 }}
                />
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-500 select-none pointer-events-none"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs mb-4 tracking-widest" style={{ color: `${accent}66` }}>
                  ◈ PRINCIPLE {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="text-xl md:text-3xl font-black leading-tight tracking-tight transition-all duration-400 group-hover:translate-x-2 max-w-3xl"
                  style={{ color: "#e8e8e8" }}
                >
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ HOBBIES ═══════════════ */}
      <section className="py-12 px-6" style={{ background: "#050505" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>OFFLINE ACTIVITIES</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">When Not Working</h2>
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
                    style={{ background: `${color}15`, color: `${color}bb`, border: `1px solid ${color}22` }}
                  >
                    {type === "gamer" ? "⚡ GAMER" : "✦ DESIGN"}
                  </span>
                </div>
                <div className="font-bold text-sm mb-1.5" style={{ color: "#ddd" }}>{name}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#555" }}>{desc}</div>
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-400 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ FUSION ═══════════════ */}
      <section className="py-16 px-6" style={{ background: "#080808" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>CROSSOVER EPISODE</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Where Gaming{" "}
              <span style={{ color: C }}>×</span>{" "}
              Design Collide
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {fusions.map(({ game, design }, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border cursor-default transition-all duration-400 hover:scale-[1.02] hover:-translate-y-1"
                style={{ borderColor: "#141414" }}
              >
                <div className="grid grid-cols-2">
                  <div
                    className="p-7 transition-all duration-400"
                    style={{ background: `${Y}08`, borderRight: `1px solid #1a1a1a` }}
                  >
                    <div className="text-xs tracking-widest mb-3 font-bold" style={{ color: `${Y}77` }}>⚡ GAMING</div>
                    <div className="font-black text-sm md:text-base" style={{ color: "#ccc" }}>{game}</div>
                  </div>
                  <div className="p-7" style={{ background: `${C}08` }}>
                    <div className="text-xs tracking-widest mb-3 font-bold" style={{ color: `${C}77` }}>✦ DESIGN</div>
                    <div className="font-black text-sm md:text-base" style={{ color: "#ccc" }}>{design}</div>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: `linear-gradient(90deg, ${Y}, ${C})` }}
                />
                <div
                  className="absolute inset-x-1/2 top-2 bottom-2 w-px opacity-0 group-hover:opacity-40 transition-all duration-400"
                  style={{ background: `linear-gradient(to bottom, transparent, #ffffff55, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-12 px-6" style={{ background: "#050505" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>PLAYER STATS</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">By The Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ label, value, icon, color }, i) => (
              <div
                key={label}
                className="group relative p-7 rounded-2xl border cursor-default transition-all duration-400 hover:scale-110 hover:-translate-y-3"
                style={{
                  borderColor: hoveredStat === i ? `${color}66` : `${color}18`,
                  background: hoveredStat === i ? `${color}0d` : "#080808",
                  ...(hoveredStat === i ? {} : {}),
                }}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div
                  className="text-2xl mb-4 transition-all duration-300 group-hover:scale-125"
                  style={{
                    color: hoveredStat === i ? color : "#2a2a2a",
                    ...(hoveredStat === i ? {} : {}),
                  }}
                >
                  {icon}
                </div>
                <div
                  className="text-2xl md:text-3xl font-black mb-1.5 transition-all duration-300"
                  style={{ color: hoveredStat === i ? color : "#eee" }}
                >
                  {value}
                </div>
                <div className="text-xs leading-snug" style={{ color: "#444" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ CURRENT MISSION ═══════════════ */}
      <section className="py-16 px-6" style={{ background: "#080808" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#444" }}>ACTIVE QUEST</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Current Mission</h2>
          </div>

          <div
            className="relative p-px rounded-2xl"
            style={{ background: `linear-gradient(135deg, ${C}, #111 40%, ${Y})` }}
          >
            <div className="rounded-2xl p-8 md:p-14" style={{ background: "#060606" }}>
              <div className="flex items-start gap-5 mb-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black shrink-0"
                  style={{ background: `${C}18`, color: C, border: `1px solid ${C}33` }}
                >
                  ◈
                </div>
                <div>
                  <div className="text-xs tracking-widest mb-2 font-bold" style={{ color: C }}>
                    MAIN QUEST — PRIORITY: LEGENDARY
                  </div>
                  <div className="text-lg md:text-xl font-black leading-tight" style={{ color: "#eee" }}>
                    Build the portfolio that breaks the internet (respectfully).
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  { obj: "Destroyed my sleep schedule and still functioning somehow.", done: true, color: C },
                  { obj: "Survived my first job for a full year without quitting mid-week.", done: true, color: C },
                  { obj: "Become rich enough to buy skins without checking the price.", done: false, color: Y },
                  { obj: "Earn money while saying “I was just playing games.", done: false, color: Y },
                  { obj: "Build a setup so clean it looks illegal.", done: false, color: Y },
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
                <div className="flex justify-between text-xs mb-3" style={{ color: "#444" }}>
                  <span className="tracking-widest">QUEST PROGRESS</span>
                  <span className="font-bold" style={{ color: C }}>40% COMPLETE</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "#141414" }}>
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