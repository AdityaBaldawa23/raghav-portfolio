"use client";

import { useState, useEffect, useRef } from "react";

const techSkills = [
  {
    title: "Frontend Development",
    gradient: "from-cyan-400 to-blue-500",
    glowColor: "rgba(6,182,212,0.12)",
    borderGlow: "rgba(6,182,212,0.25)",
    points: [
      "Crafting pixel-perfect UIs with React & Next.js",
      "Advanced animations via Framer Motion & GSAP",
      "Design systems, component libraries & a11y",
    ],
  },
  {
    title: "Backend Systems",
    gradient: "from-violet-400 to-purple-600",
    glowColor: "rgba(139,92,246,0.12)",
    borderGlow: "rgba(139,92,246,0.25)",
    points: [
      "REST & GraphQL API architecture and design",
      "Node.js, Express, Python & microservices",
      "Database design — SQL, MongoDB & Redis",
    ],
  },
  {
    title: "UI / UX Design",
    gradient: "from-pink-400 to-rose-500",
    glowColor: "rgba(244,114,182,0.12)",
    borderGlow: "rgba(244,114,182,0.25)",
    points: [
      "User research, wireframing & Figma prototyping",
      "Design tokens, spacing systems & typography",
      "Motion design and interaction storytelling",
    ],
  },
  {
    title: "DevOps & Cloud",
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.12)",
    borderGlow: "rgba(52,211,153,0.25)",
    points: [
      "CI/CD pipelines with GitHub Actions & Docker",
      "AWS, Vercel & edge deployment strategies",
      "Performance monitoring & observability",
    ],
  },
];

const tools = [
  { name: "React / Next.js", pct: 94, icon: "⚛", gradient: "from-cyan-400 to-blue-500" },
  { name: "TypeScript",      pct: 90, icon: "TS", gradient: "from-blue-400 to-indigo-500" },
  { name: "Figma",           pct: 88, icon: "✦",  gradient: "from-purple-400 to-pink-500" },
  { name: "Node.js",         pct: 85, icon: "⬡",  gradient: "from-green-400 to-emerald-500" },
  { name: "PostgreSQL",      pct: 80, icon: "◈",  gradient: "from-sky-400 to-cyan-500" },
  { name: "Docker",          pct: 75, icon: "▣",  gradient: "from-blue-500 to-violet-500" },
];

const principles = [
  { num: "01", icon: "◉", title: "Intentionality Over Decoration", desc: "Every visual decision carries purpose. Design without reason is just noise in disguise." },
  { num: "02", icon: "⬡", title: "Systems Thinking",               desc: "Build components like building blocks — modular, composable, and endlessly consistent." },
  { num: "03", icon: "◈", title: "Motion With Meaning",            desc: "Animations guide attention and reveal hierarchy. They become invisible when done right." },
  { num: "04", icon: "△", title: "Performance Is UX",              desc: "Fast is a feature. An interface that loads late communicates disrespect for someone's time." },
  { num: "05", icon: "✦", title: "Always In Beta",                 desc: "Curiosity is the constant. Learn, rebuild, iterate. Comfort is the enemy of craft." },
];

/* ─── Animated progress bar ─── */
function Bar({ pct, gradient, delay = 0 }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), delay + 400);
    return () => clearTimeout(t);
  }, [pct, delay]);

  return (
    <div className="flex items-center gap-3" style={{ minWidth: 180 }}>
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: 5, background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          style={{
            width: `${width}%`,
            transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
            boxShadow: width > 0 ? "0 0 8px 1px rgba(99,102,241,0.4)" : "none",
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.32)",
          minWidth: 32,
        }}
      >
        {pct}%
      </span>
    </div>
  );
}

/* ─── Skill card ─── */
function SkillCard({ skill, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 cursor-default select-none"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? skill.borderGlow : "rgba(255,255,255,0.07)"}`,
        backdropFilter: "blur(16px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 0 40px 4px ${skill.glowColor}, 0 20px 40px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
        animationDelay: `${idx * 0.1}s`,
      }}
    >
      {/* corner accent */}
      <div
        className="absolute top-0 left-0 rounded-tl-2xl"
        style={{
          width: 60, height: 60,
          background: `radial-gradient(circle at top left, ${skill.glowColor} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      <h3
        className={`bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent mb-4`}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {skill.title}
      </h3>

      <ul className="space-y-2">
        {skill.points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className={`mt-2 block shrink-0 rounded-full bg-gradient-to-r ${skill.gradient}`}
              style={{ width: 4, height: 4 }}
            />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "rgba(226,232,240,0.6)", lineHeight: 1.65 }}>
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Tool row ─── */
function ToolRow({ tool, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 px-5 py-4 rounded-xl cursor-default"
      style={{
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
      }}
    >
      <div
        className={`flex items-center justify-center shrink-0 rounded-lg bg-gradient-to-br ${tool.gradient}`}
        style={{ width: 38, height: 38, fontSize: 13, fontFamily: "'Space Mono', monospace", fontWeight: 700, color: "#050508" }}
      >
        {tool.icon}
      </div>

      <span
        className="flex-1"
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: hovered ? "rgba(226,232,240,0.95)" : "rgba(226,232,240,0.72)", transition: "color 0.3s" }}
      >
        {tool.name}
      </span>

      <Bar pct={tool.pct} gradient={tool.gradient} delay={idx * 80} />
    </div>
  );
}

/* ─── Principle row ─── */
function Principle({ p, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-5 items-start py-5 cursor-default"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.15em",
          color: hovered ? "rgba(6,182,212,0.8)" : "rgba(255,255,255,0.2)",
          transition: "color 0.3s",
          minWidth: 28,
          paddingTop: 4,
        }}
      >
        {p.num}
      </span>
      <div>
        <div className="flex items-center gap-2.5 mb-1.5">
          <span style={{ color: "#a78bfa", fontSize: 13 }}>{p.icon}</span>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 19,
              fontWeight: 600,
              color: hovered ? "rgba(255,255,255,0.97)" : "rgba(226,232,240,0.85)",
              transition: "color 0.3s",
              margin: 0,
            }}
          >
            {p.title}
          </h4>
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "rgba(226,232,240,0.42)", lineHeight: 1.65, margin: 0 }}>
          {p.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Section label ─── */
function Label({ glyph, text, color }) {
  return (
    <p
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.22em",
        color,
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {glyph}&nbsp;&nbsp;{text}
    </p>
  );
}

/* ─── Main page ─── */
export default function SkillsPage() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(40px,-30px) scale(1.07); }
          66%      { transform: translate(-20px,20px) scale(0.95); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .blob-1 { animation: blob 14s ease-in-out infinite; }
        .blob-2 { animation: blob 18s ease-in-out infinite reverse; animation-delay:-5s; }
        .blob-3 { animation: blob 22s ease-in-out infinite; animation-delay:-10s; }
        .shimmer-heading {
          background: linear-gradient(90deg,#e2e8f0 0%,#67e8f9 38%,#a78bfa 58%,#e2e8f0 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }
        .section-enter { animation: fadeUp 0.7s ease both; }
      `}</style>

      <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050508" }}>

        {/* ── ambient blobs ── */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="blob-1 absolute rounded-full"
            style={{ width:640,height:640,top:"-12%",left:"-16%",background:"radial-gradient(circle,#06b6d4 0%,transparent 70%)",filter:"blur(90px)",opacity:.07 }} />
          <div className="blob-2 absolute rounded-full"
            style={{ width:720,height:720,top:"35%",right:"-20%",background:"radial-gradient(circle,#8b5cf6 0%,transparent 70%)",filter:"blur(100px)",opacity:.065 }} />
          <div className="blob-3 absolute rounded-full"
            style={{ width:520,height:520,bottom:"-6%",left:"32%",background:"radial-gradient(circle,#ec4899 0%,transparent 70%)",filter:"blur(85px)",opacity:.055 }} />
        </div>

        {/* ── content ── */}
        <div className="relative mx-auto max-w-5xl px-6 py-24 space-y-32" style={{ zIndex: 1 }}>

          {/* ══ TECHNICAL SKILLS ══ */}
          <section className="section-enter">
            <div className="mb-14">
              <Label glyph="◈" text="Expertise" color="rgba(6,182,212,0.75)" />
              <h2
                className="shimmer-heading"
                style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(48px,8vw,80px)", fontWeight:300, lineHeight:1, letterSpacing:"-0.045em", margin:0 }}
              >
                Technical Skills
              </h2>
              <div className="mt-5 h-px w-20" style={{ background:"linear-gradient(90deg,rgba(6,182,212,.6) 0%,transparent 100%)" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techSkills.map((s, i) => <SkillCard key={i} skill={s} idx={i} />)}
            </div>
          </section>

          {/* ══ TOOLS ══ */}
          <section className="section-enter" style={{ animationDelay: "0.15s" }}>
            <div className="mb-10">
              <Label glyph="◉" text="Arsenal" color="rgba(167,139,250,0.75)" />
              <h2
                style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(44px,7vw,72px)", fontWeight:300, lineHeight:1, letterSpacing:"-0.04em", color:"rgba(226,232,240,.95)", margin:0 }}
              >
                Tools
              </h2>
              <div className="mt-5 h-px w-20" style={{ background:"linear-gradient(90deg,rgba(139,92,246,.6) 0%,transparent 100%)" }} />
            </div>

            <div className="space-y-2">
              {tools.map((t, i) => <ToolRow key={i} tool={t} idx={i} />)}
            </div>
          </section>

          {/* ══ DESIGN APPROACH ══ */}
          <section className="section-enter" style={{ animationDelay: "0.3s" }}>
            <div className="mb-8">
              <Label glyph="△" text="Philosophy" color="rgba(244,114,182,0.75)" />
              <h2
                style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(44px,7vw,72px)", fontWeight:300, lineHeight:1, letterSpacing:"-0.04em", color:"rgba(226,232,240,.95)", margin:0 }}
              >
                Design Approach
              </h2>
              <div className="mt-5 h-px w-20" style={{ background:"linear-gradient(90deg,rgba(244,114,182,.6) 0%,transparent 100%)" }} />
            </div>

            <div className="max-w-2xl">
              {principles.map((p, i) => <Principle key={i} p={p} idx={i} />)}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}