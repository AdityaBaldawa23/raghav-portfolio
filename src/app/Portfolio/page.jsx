"use client";

import { useState } from "react";
import Portfolio from "@/Components/UI/Portfolio";

const CYAN = "#52deff";
const YELLOW = "#ffff00";
const WHITE = "#FFFFFF";

export default function Final_Portfolio() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  const uiuxSkills = ["User Research","Wireframing","Prototyping","Interaction Design","Usability Testing","Design Systems","Journey Mapping","Info Architecture"];
  const brandingSkills = ["Logo Design","Brand Strategy","Visual Identity","Typography","Color Theory","Brand Guidelines","Packaging","Art Direction"];
  const tools = [
    { name: "Figma", pct: 98, icon: "F" },
    { name: "Illustrator", pct: 92, icon: "Ai" },
    { name: "Photoshop", pct: 90, icon: "Ps" },
    { name: "After Effects", pct: 78, icon: "Ae" },
    { name: "Framer", pct: 85, icon: "Fr" },
    { name: "Blender", pct: 62, icon: "B" },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden"
      style={{ background: "#050505", fontFamily: "'DM Mono','Courier New',monospace" }}>

      {/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░
          KEYFRAME STYLES
      ░░░░░░░░░░░░░░░░░░░░░░░░░░░ */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-rev  { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-glow {
          0%,100% { opacity: 0.6; filter: blur(40px); }
          50%      { opacity: 1.0; filter: blur(60px); }
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float-y {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .spin-slow  { animation: spin-slow 18s linear infinite; }
        .spin-rev   { animation: spin-rev  12s linear infinite; }
        .pulse-orb  { animation: pulse-glow 4s ease-in-out infinite; }
        .ticker-run { animation: ticker 22s linear infinite; }
        .float-pill { animation: float-y 3s ease-in-out infinite; }
        .cursor-blink { animation: blink 1.1s step-end infinite; }
      `}</style>

      {/* ═══════════════════════════════════════
          SKILLS SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">

        {/* ── LAYERED BACKGROUNDS ── */}
        {/* Giant cyan orb top-left */}
        <div className="pulse-orb absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${CYAN}30, transparent 70%)` }} />
        {/* Yellow orb mid-right */}
        <div className="pulse-orb absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${YELLOW}20, transparent 70%)`, animationDelay: "2s" }} />
        {/* Diagonal slash BG */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute" style={{
            top: "10%", left: "-10%", width: "130%", height: "3px",
            background: `linear-gradient(90deg, transparent, ${CYAN}44, ${YELLOW}44, transparent)`,
            transform: "rotate(-8deg)"
          }} />
          <div className="absolute" style={{
            top: "60%", left: "-10%", width: "130%", height: "1px",
            background: `linear-gradient(90deg, transparent, ${CYAN}22, transparent)`,
            transform: "rotate(-8deg)"
          }} />
        </div>
        {/* Dot grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(${CYAN}25 1.5px, transparent 1.5px)`,
          backgroundSize: "36px 36px", opacity: 0.35
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ── SECTION LABEL ROW ── */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.4em]"
              style={{ background: `${CYAN}18`, color: CYAN, border: `1px solid ${CYAN}55` }}>
              ◈ CREATIVE ARSENAL
            </div>
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${CYAN}44, transparent)` }} />
            <span className="text-xs" style={{ color: "#333" }}>[ SECTION 01 ]</span>
          </div>

          {/* ── MASSIVE HEADING ── */}
          <div className="mb-16 relative">
            {/* Ghost background text */}
            <div className="absolute -top-6 left-0 text-[10rem] md:text-[16rem] font-black leading-none select-none pointer-events-none tracking-tighter"
              style={{ color: `${CYAN}06`, lineHeight: 1 }}>
              SKILLS
            </div>
            <h2 className="relative font-black tracking-tighter leading-[0.82]"
              style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}>
              <span className="block" style={{ color: WHITE }}>TOOLS OF</span>
              <span className="block" style={{
                color: CYAN,
                textShadow: `0 0 40px ${CYAN}cc, 0 0 80px ${CYAN}55, 0 0 120px ${CYAN}22`,
                WebkitTextStroke: `1px ${CYAN}`
              }}>THE CRAFT</span>
            </h2>
            {/* Cursor blink */}
            <span className="cursor-blink inline-block ml-3 font-black"
              style={{ color: CYAN, fontSize: "clamp(2rem,6vw,5rem)" }}>_</span>
          </div>

          {/* ══════════════════════════════
              BIG ASYMMETRIC LAYOUT
          ══════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

            {/* ─── CARD A: UI/UX — Giant statement card ─── */}
            <div className="lg:col-span-8 relative rounded-3xl p-8 md:p-12 overflow-hidden group cursor-default"
              style={{
                background: "linear-gradient(135deg, #0c1a18 0%, #081410 100%)",
                border: `2px solid ${CYAN}44`,
                boxShadow: `0 0 60px ${CYAN}18, inset 0 0 80px ${CYAN}08`
              }}>

              {/* Inner corner glow */}
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                style={{ background: CYAN }} />
              {/* Bottom-right shadow */}
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: WHITE }} />

              {/* Spinning ring decoration */}
              <div className="absolute -top-16 -right-16 w-48 h-48 spin-slow pointer-events-none opacity-20"
                style={{
                  border: `2px dashed ${CYAN}`,
                  borderRadius: "50%",
                }}>
                <div className="absolute inset-4 rounded-full"
                  style={{ border: `1px solid ${CYAN}55` }} />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base"
                      style={{ background: CYAN, color: "#050505" }}>01</div>
                    <div>
                      <div className="text-xs tracking-[0.4em] font-bold" style={{ color: CYAN }}>UI / UX DESIGN</div>
                      <div className="text-xs" style={{ color: "#444" }}>8 disciplines</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black" style={{ color: `${CYAN}33` }}>UX</div>
                  </div>
                </div>

                {/* Skill pills — floating asymmetric */}
                <div className="flex flex-wrap gap-3">
                  {uiuxSkills.map((s, i) => (
                    <button key={s}
                      className="text-xs px-5 py-2.5 rounded-full font-bold tracking-wider transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                      style={{
                        background: activeSkill === s ? CYAN : `${CYAN}14`,
                        color: activeSkill === s ? "#050505" : CYAN,
                        border: `1.5px solid ${activeSkill === s ? CYAN : `${CYAN}44`}`,
                        boxShadow: activeSkill === s ? `0 0 20px ${CYAN}88, 0 8px 24px ${CYAN}44` : "none",
                        animationDelay: `${i * 0.3}s`,
                      }}
                      onMouseEnter={() => setActiveSkill(s)}
                      onMouseLeave={() => setActiveSkill(null)}>
                      {s}
                    </button>
                  ))}
                </div>

                {/* Bottom stat row */}
                <div className="mt-10 pt-6 flex gap-8 items-center"
                  style={{ borderTop: `1px solid ${CYAN}22` }}>
                  {[["5+", "YEARS"], ["87", "PROJECTS"], ["100%", "PASSION"]].map(([val, lbl]) => (
                    <div key={lbl}>
                      <div className="text-2xl font-black" style={{ color: CYAN }}>{val}</div>
                      <div className="text-xs tracking-widest" style={{ color: "#444" }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── CARD B: MINI STACK (right column) ─── */}
            <div className="lg:col-span-4 flex flex-col gap-5">

              {/* B1: Yellow accent card */}
              <div className="relative rounded-3xl p-7 overflow-hidden group cursor-default flex-1"
                style={{
                  background: "linear-gradient(135deg, #1a1400 0%, #0d0a00 100%)",
                  border: `2px solid ${YELLOW}44`,
                  boxShadow: `0 0 40px ${YELLOW}14`
                }}>
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                  style={{ background: YELLOW }} />
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.4em] font-bold mb-2" style={{ color: YELLOW }}>⚡ GAMER MODE</div>
                  <div className="text-3xl font-black leading-tight mb-4" style={{ color: WHITE }}>
                    DESIGN<br />
                    <span style={{ color: YELLOW, textShadow: `0 0 30px ${YELLOW}cc` }}>IS A</span><br />
                    WEAPON
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "#666" }}>
                    Every decision is calculated. Every pixel is intentional. No casual moves.
                  </div>
                </div>
              </div>

              {/* B2: Tools preview card */}
              <div className="relative rounded-3xl p-7 overflow-hidden group cursor-default"
                style={{
                  background: "#080808",
                  border: `1px solid ${CYAN}22`,
                }}>
                <div className="text-xs tracking-[0.4em] font-bold mb-5" style={{ color: CYAN }}>✦ QUICK STACK</div>
                <div className="flex flex-wrap gap-2">
                  {tools.map(({ name, icon }) => (
                    <div key={name}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300 hover:scale-125 hover:-translate-y-1 cursor-default"
                      style={{
                        background: `${CYAN}14`,
                        color: CYAN,
                        border: `1px solid ${CYAN}33`,
                      }}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── CARD C: TOOLS bar chart ─── */}
            <div className="lg:col-span-5 relative rounded-3xl p-8 overflow-hidden group cursor-default"
              style={{
                background: "linear-gradient(160deg, #0a0a0a, #0f0f0f)",
                border: `2px solid ${CYAN}33`,
              }}>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${CYAN}08, transparent)` }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black"
                    style={{ background: CYAN, color: "#050505" }}>03</div>
                  <span className="text-xs tracking-[0.4em] font-bold" style={{ color: CYAN }}>TOOLS & SOFTWARE</span>
                </div>

                <div className="space-y-4">
                  {tools.map(({ name, pct }, i) => (
                    <div key={name} className="cursor-default"
                      onMouseEnter={() => setHoveredTool(i)}
                      onMouseLeave={() => setHoveredTool(null)}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-bold transition-colors duration-300"
                          style={{ color: hoveredTool === i ? CYAN : "#888" }}>{name}</span>
                        <span className="text-xs font-black transition-colors duration-300"
                          style={{ color: hoveredTool === i ? CYAN : "#333" }}>{pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#141414" }}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${pct}%`,
                            background: hoveredTool === i
                              ? `linear-gradient(90deg, ${CYAN}, ${YELLOW})`
                              : `linear-gradient(90deg, ${CYAN}88, ${CYAN}33)`,
                            boxShadow: hoveredTool === i ? `0 0 12px ${CYAN}` : "none",
                          }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── CARD D: BRANDING — full-bleed color card ─── */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden group cursor-default"
              style={{ minHeight: "280px" }}>
              {/* Full bleed BG */}
              <div className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${CYAN}22 0%, #050505 40%, ${YELLOW}14 100%)`,
                  border: `2px solid ${CYAN}44`,
                  borderRadius: "24px"
                }} />
              {/* Noise texture sim */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "200px",
              }} />

              {/* Giant "02" watermark */}
              <div className="absolute right-6 bottom-0 text-[10rem] font-black leading-none select-none pointer-events-none"
                style={{ color: `${CYAN}12`, fontFamily: "'DM Mono',monospace" }}>02</div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full" style={{ minHeight: "280px" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black"
                      style={{ background: CYAN, color: "#050505" }}>02</div>
                    <span className="text-xs tracking-[0.4em] font-bold" style={{ color: CYAN }}>BRANDING & IDENTITY</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {brandingSkills.map((s, i) => (
                    <span key={s}
                      className="text-xs px-4 py-2 rounded-full font-bold tracking-wider transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default"
                      style={{
                        background: i % 3 === 0 ? `${CYAN}22` : i % 3 === 1 ? `${YELLOW}14` : "#ffffff0a",
                        color: i % 3 === 0 ? CYAN : i % 3 === 1 ? YELLOW : "#ffffff66",
                        border: `1.5px solid ${i % 3 === 0 ? `${CYAN}44` : i % 3 === 1 ? `${YELLOW}44` : "#ffffff14"}`,
                      }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>{/* end grid */}
        </div>{/* end max-w */}
      </section>


      {/* ═══════════════════════════════════════
          TICKER TRANSITION
      ═══════════════════════════════════════ */}
      <div className="relative py-5 overflow-hidden" style={{ background: CYAN }}>
        <div className="ticker-run whitespace-nowrap flex gap-12 text-sm font-black tracking-widest"
          style={{ color: "#050505" }}>
          {Array(6).fill(["BRAND DESIGN", "✦", "UI/UX", "◈", "MOTION", "◎", "TYPOGRAPHY", "▲", "SYSTEMS", "★"]).flat()
            .map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>


      {/* ═══════════════════════════════════════
          PROJECTS SECTION
      ═══════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-10 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #050505 0%, #08051a 60%, #050505 100%)" }}>

        {/* Purple atmosphere */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #7C3AED, #4F46E5)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-10 pointer-events-none"
          style={{ background: "#6366F1" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(#7C3AED22 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px", opacity: 0.5
        }} />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute" style={{
            top: "20%", left: "-5%", width: "110%", height: "2px",
            background: "linear-gradient(90deg, transparent, #7C3AED44, #4F46E544, transparent)",
            transform: "rotate(-5deg)"
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Label row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.4em]"
              style={{ background: "#7C3AED22", color: "#A855F7", border: "1px solid #7C3AED55" }}>
              ◈ SELECTED WORKS
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #7C3AED44, transparent)" }} />
            <span className="text-xs" style={{ color: "#333" }}>[ SECTION 02 ]</span>
          </div>

          {/* Mega heading */}
          <div className="mb-16 relative">
            <div className="absolute -top-6 left-0 font-black leading-none select-none pointer-events-none tracking-tighter"
              style={{ fontSize: "clamp(6rem,20vw,20rem)", color: "#7C3AED06", lineHeight: 1 }}>
              WORK
            </div>
            <h2 className="relative font-black tracking-tighter leading-[0.82]"
              style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}>
              <span className="block" style={{ color: WHITE }}>WHERE IDEAS</span>
              <span className="block" style={{ color: WHITE }}>BECOME</span>
              <span className="block" style={{
                background: "linear-gradient(110deg, #A855F7, #6366F1, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px #7C3AED88)"
              }}>REALITY</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["All Work", "Branding", "UI/UX", "Motion", "Packaging"].map((f, i) => (
              <span key={f}
                className="text-xs px-5 py-2.5 rounded-full font-bold tracking-wider cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: i === 0 ? "linear-gradient(135deg, #7C3AED, #4F46E5)" : "#ffffff08",
                  color: i === 0 ? WHITE : "#555",
                  border: i === 0 ? "none" : "1px solid #ffffff14",
                  boxShadow: i === 0 ? "0 0 24px #7C3AED66" : "none"
                }}>
                {f}
              </span>
            ))}
          </div>

          {/* Projects placeholder */}
          <Portfolio />

          {/* CTA footer */}
          <div className="mt-12 relative rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, #0d0a1e, #130820)",
              border: "2px solid #7C3AED44",
              boxShadow: "0 0 60px #7C3AED18"
            }}>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "#7C3AED" }} />

            <div className="relative z-10">
              <div className="text-xs tracking-[0.4em] mb-2 font-bold" style={{ color: "#A855F7" }}>
                ◈ OPEN FOR PROJECTS
              </div>
              <div className="text-2xl md:text-3xl font-black leading-tight" style={{ color: WHITE }}>
                Let's build something<br />
                <span style={{
                  background: "linear-gradient(90deg, #A855F7, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>that can't be ignored.</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                className="px-8 py-4 rounded-2xl text-sm font-black tracking-widest transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, #7C3AED, #4F46E5)`,
                  color: WHITE,
                  boxShadow: "0 0 32px #7C3AED66, 0 8px 32px #7C3AED44"
                }}>
                START A PROJECT ◈
              </button>
              <button
                className="px-8 py-4 rounded-2xl text-sm font-black tracking-widest transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "transparent",
                  color: CYAN,
                  border: `2px solid ${CYAN}66`,
                  boxShadow: `0 0 20px ${CYAN}22`
                }}>
                VIEW RESUME ✦
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}