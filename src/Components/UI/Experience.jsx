import React from "react";
import { Timeline } from "@/Components/Helpers/timeline";

/* ─────────────────────────────────────────────
   Reusable micro-components for content blocks
───────────────────────────────────────────── */

const Tag = ({ children, accent = "cyan" }) => (
  <span
    className="inline-flex items-center px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-light rounded-full border transition-colors duration-300"
    style={{
      borderColor:
        accent === "cyan" ? "rgba(0,229,255,0.2)" : "rgba(255,255,0,0.2)",
      color: accent === "cyan" ? "rgba(0,229,255,0.7)" : "rgba(255,255,0,0.7)",
      background:
        accent === "cyan" ? "rgba(0,229,255,0.04)" : "rgba(255,255,0,0.04)",
    }}
  >
    {children}
  </span>
);

const DataPill = ({ label, value }) => (
  <div
    className="flex flex-col gap-1 p-4 rounded-xl border"
    style={{
      borderColor: "rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.02)",
    }}
  >
    <p
      className="text-[9px] tracking-[0.25em] uppercase"
      style={{ color: "rgba(255,255,255,0.25)" }}
    >
      {label}
    </p>
    <p
      className="text-sm font-light"
      style={{
        fontFamily: "var(--font-body)",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      {value}
    </p>
  </div>
);

const QuoteBlock = ({ children }) => (
  <div
    className="relative pl-5 py-1"
    style={{ borderLeft: "1px solid rgba(0,229,255,0.3)" }}
  >
    <p
      className="text-sm font-light leading-relaxed"
      style={{
        color: "rgba(255,255,255,0.45)",
        fontFamily: "Georgia, serif",
        fontStyle: "italic",
      }}
    >
      {children}
    </p>
  </div>
);

const Highlight = ({ label, value, accent = "cyan" }) => (
  <div
    className="inline-flex flex-col gap-1 px-5 py-4 rounded-2xl border"
    style={{
      borderColor:
        accent === "cyan" ? "rgba(0,229,255,0.12)" : "rgba(255,255,0,0.12)",
      background:
        accent === "cyan" ? "rgba(0,229,255,0.03)" : "rgba(255,255,0,0.03)",
    }}
  >
    <span
      className="text-[9px] tracking-[0.25em] uppercase"
      style={{
        color:
          accent === "cyan" ? "rgba(0,229,255,0.4)" : "rgba(255,255,0,0.4)",
      }}
    >
      {label}
    </span>
    <span
      className="text-2xl font-light tracking-tight"
      style={{
        fontFamily: "Georgia, serif",
        color: accent === "cyan" ? "#00e5ff" : "#ffff00",
        textShadow:
          accent === "cyan"
            ? "0 0 20px rgba(0,229,255,0.3)"
            : "0 0 20px rgba(255,255,0,0.3)",
      }}
    >
      {value}
    </span>
  </div>
);

const Codename = ({ name, sub }) => (
  <div
    className="relative rounded-2xl overflow-hidden p-6"
    style={{
      background:
        "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(255,255,0,0.03) 100%)",
      border: "1px solid rgba(255,255,255,0.07)",
    }}
  >
    {/* corner accent */}
    <div
      className="absolute top-0 right-0 w-16 h-16"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,255,0,0.08), transparent 70%)",
      }}
    />
    <p
      className="text-[9px] tracking-[0.35em] uppercase mb-3"
      style={{ color: "rgba(255,255,255,0.2)" }}
    >
      Codename
    </p>
    <p
      className="text-4xl font-light tracking-[0.3em]"
      style={{
        fontFamily: "Georgia, serif",
        background: "linear-gradient(90deg, #00e5ff, #ffff00)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "none",
      }}
    >
      {name}
    </p>
    <p
      className="text-xs mt-3 font-light tracking-widest"
      style={{ color: "rgba(255,255,255,0.2)" }}
    >
      {sub}
    </p>
  </div>
);

/* ─────────────────────────────────────
   Timeline data — elevated
───────────────────────────────────── */

export function TimelineDemo() {
  const data = [
  {
    title: "2004",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            Born somewhere quiet.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(0,229,255,0.5)" }}>
            27 July — Sangli, Maharashtra
          </p>
        </div>
        <QuoteBlock>
          Small city. Slower pace. The kind of place that teaches you to observe before you speak.
        </QuoteBlock>
        <div className="flex gap-2 flex-wrap">
          <Tag accent="cyan">Sangli</Tag>
          <Tag accent="cyan">Solapur</Tag>
          <Tag>Maharashtra</Tag>
        </div>
      </div>
    ),
  },

  // ✅ 10th Added
  {
    title: "2020",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            Foundation years.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(0,229,255,0.5)" }}>
            10th Completed
          </p>
        </div>
        <QuoteBlock>
          The basics were built here. Discipline, routine, and the first sense of direction.
        </QuoteBlock>
        <DataPill label="School" value="S.R. Chandak English High School, Solapur" />
      </div>
    ),
  },

  // ✅ 12th Added + Pune shift merged smartly
  {
    title: "2022",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            Transition phase.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(0,229,255,0.5)" }}>
            12th Completed · Shifted to Pune
          </p>
        </div>
        <QuoteBlock>
          Closed one chapter in Solapur and stepped into a bigger city with bigger questions.
        </QuoteBlock>
        <div className="grid grid-cols-2 gap-3">
          <DataPill label="College" value="SES Junior College, Solapur" />
          <DataPill label="New City" value="Pune" />
        </div>
      </div>
    ),
  },

  // Degree stays but now clean timeline flow
  {
    title: "2022",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            Built the base.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(0,229,255,0.5)" }}>
            B.Voc — Graphic & Multimedia
          </p>
        </div>
        <QuoteBlock>
          Formal training in craft. Learned to see before learning to make.
        </QuoteBlock>
        <div className="grid grid-cols-2 gap-3">
          <DataPill label="Institute" value="Arena Animation" />
          <DataPill label="University" value="Pune University" />
          <DataPill label="Field" value="Graphic & Multimedia" />
        </div>
      </div>
    ),
  },

  {
    title: "Late '22",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            First money.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,0,0.5)" }}>
            Freelance — Real clients. Real pressure.
          </p>
        </div>
        <QuoteBlock>
          No safety net, no hand-holding. Just a brief, a deadline, and a version of yourself you hadn't met yet.
        </QuoteBlock>
        <div className="flex gap-2 flex-wrap">
          <Tag accent="yellow">Freelance</Tag>
          <Tag accent="yellow">Design</Tag>
          <Tag accent="yellow">Self-built</Tag>
        </div>
      </div>
    ),
  },

  {
    title: "2025",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            Level up.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(0,229,255,0.5)" }}>
            Degree completed
          </p>
        </div>
        <QuoteBlock>
          Three years condensed into a credential. But the real degree came from the work done outside the classroom.
        </QuoteBlock>
        <Highlight label="Milestone" value="Bachelor of Vocation in Graphic & Multimedia" accent="cyan" />
      </div>
    ),
  },

  {
    title: "May '25",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
            Into the system.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,0,0.5)" }}>
            May 2025 → May 2026
          </p>
        </div>
        <QuoteBlock>
          Internship that became full-time. Learned what it means to design inside constraints.
        </QuoteBlock>
        <div className="grid grid-cols-2 gap-3">
          <DataPill label="Company" value="Skillinabox Learning Solutions Private Limited" />
          <DataPill label="Duration" value="1 Year" />
        </div>
      </div>
    ),
  },

  {
    title: "Ongoing",
    content: (
      <div className="space-y-5">
        <p className="text-xl font-light">Still independent.</p>
        <QuoteBlock>
          Clients kept coming. The work kept growing quietly.
        </QuoteBlock>
        <div className="flex gap-2 flex-wrap">
          <Tag accent="cyan">Freelance</Tag>
          <Tag accent="cyan">Independent</Tag>
        </div>
      </div>
    ),
  },

  {
    title: "2026",
    content: (
      <div className="space-y-5">
        <p className="text-xl font-light">Something is coming.</p>
        <QuoteBlock>
          A studio. A direction. A name that means something.
        </QuoteBlock>
        <Codename name="REXORY" sub="Freelance Design Studio · In Progress" />
      </div>
    ),
  },
];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
