"use client";
import { useState, useEffect, useRef } from "react";

const images = {
  businessCardFront: "/Images/Kokumi Business Card Front.png",
  businessCardBack: "/Images/Kokumi Business Card Back.png",
  instagramPost: "/Images/Kokumi Instagram Post.png",
  standee: "/Images/Kokumi Standee.png",
  menuFront: "/Images/Menu Front.png",
  menuBack: "/Images/Menu Back.png",
};

const palette = [
  { hex: "#F5EDE0", label: "Cream Base" },
  { hex: "#C4693A", label: "Terracotta" },
  { hex: "#8B4513", label: "Warm Brown" },
  { hex: "#D4956A", label: "Spice" },
  { hex: "#2C1A0E", label: "Deep Roast" },
  { hex: "#000000", label: "Void Black" },
];

  const fonts = [
  { name: "Playfair Display", style: "font-serif", weight: "font-bold", size: "text-4xl", role: "Display / Headlines" },
  { name: "Courier New", style: "font-mono", weight: "font-normal", size: "text-base", role: "Body / Monospace" },
];

const keywords = ["WARM BOWLS", "BOLD FLAVOURS", "JAPANESE COMFORT", "KOREAN SPICE", "INDIAN SOUL", "MINIMAL", "DARK MODE NEVER", "TYPESET"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ImageCard({ src, label, className = "", aspectClass = "aspect-square", delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden group cursor-pointer ${aspectClass} ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.94)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
      <div
        className="absolute inset-0 flex items-end p-3"
        style={{
          background: hovered ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" : "transparent",
          transition: "background 0.4s ease",
        }}
      >
        {hovered && (
          <span className="text-xs font-mono text-white tracking-widest uppercase opacity-90">{label}</span>
        )}
      </div>
    </div>
  );
}

export default function KokumiMoodBoard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "#000000",
        fontFamily: "'Courier New', monospace",
        color: "#F5EDE0",
      }}
    >
      {/* ── HERO HEADER ── */}
      <section className="relative px-6 md:px-12 pt-16 pb-8 overflow-hidden">
        {/* BG texture lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #F5EDE0 0px, transparent 1px, transparent 40px)",
          }}
        />

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#C4693A" }}>
            Brand System · 2025
          </p>
          <h1
            className="font-bold leading-none"
            style={{
              fontFamily: "'Georgia', 'Playfair Display', serif",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              color: "#F5EDE0",
              letterSpacing: "-0.02em",
            }}
          >
            KOKUMI
          </h1>
          <p
            className="font-mono tracking-widest mt-1"
            style={{ color: "#C4693A", fontSize: "clamp(0.7rem, 2vw, 1.1rem)", letterSpacing: "0.3em" }}
          >
            WARM BOWLS. BOLD FLAVOURS.
          </p>
        </div>

        {/* horizontal rule */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #C4693A, transparent)" }} />
          <span className="text-xs font-mono tracking-widest" style={{ color: "#8B4513" }}>MOOD BOARD</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, #C4693A, transparent)" }} />
        </div>
      </section>

      {/* ── SECTION 1 · HERO COLLAGE — image heavy, asymmetric ── */}
      <section className="px-6 md:px-12 pb-4">
        <FadeIn className="grid grid-cols-12 gap-2 md:gap-3" delay={0}>
          {/* Big standee left */}
          <div className="col-span-12 md:col-span-5 row-span-2">
            <ImageCard
              src={images.standee}
              label="Kokumi Standee"
              aspectClass=""
              className="h-[340px] md:h-[500px]"
              delay={0}
            />
          </div>
          {/* Instagram top right */}
          <div className="col-span-6 md:col-span-4">
            <ImageCard src={images.instagramPost} label="Instagram Post" className="h-[165px] md:h-[244px]" aspectClass="" delay={100} />
          </div>
          {/* Business card front top */}
          <div className="col-span-6 md:col-span-3">
            <ImageCard src={images.businessCardFront} label="Business Card Front" className="h-[165px] md:h-[244px]" aspectClass="" delay={150} />
          </div>
          {/* Menu front */}
          <div className="col-span-6 md:col-span-4">
            <ImageCard src={images.menuFront} label="Menu — Front" className="h-[165px] md:h-[244px]" aspectClass="" delay={200} />
          </div>
          {/* Business card back */}
          <div className="col-span-6 md:col-span-3">
            <ImageCard src={images.businessCardBack} label="Business Card Back" className="h-[165px] md:h-[244px]" aspectClass="" delay={250} />
          </div>
        </FadeIn>
      </section>

      {/* ── SECTION 2 · FULL BLEED menu back ── */}
      <section className="px-6 md:px-12 py-3">
        <FadeIn delay={0}>
          <ImageCard
            src={images.menuBack}
            label="Menu — Back"
            aspectClass=""
            className="w-full h-[260px] md:h-[420px]"
            delay={0}
          />
        </FadeIn>
      </section>

      {/* ── SECTION 3 · COLOR PALETTE ── */}
      <section className="px-6 md:px-12 py-12">
        <FadeIn delay={0}>
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#C4693A" }}>— Colour Palette</p>
        </FadeIn>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {palette.map((c, i) => (
            <FadeIn key={c.hex} delay={i * 60}>
              <div className="group cursor-pointer">
                <div
                  className="w-full mb-2"
                  style={{
                    height: "clamp(60px, 10vw, 100px)",
                    background: c.hex,
                    border: c.hex === "#000000" ? "1px solid #333" : "none",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scaleY(1.08)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scaleY(1)"}
                />
                <p className="text-xs font-mono" style={{ color: "#8B4513" }}>{c.hex}</p>
                <p className="text-xs font-mono" style={{ color: "#F5EDE0", opacity: 0.6 }}>{c.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SECTION 4 · TYPOGRAPHY ── */}
      <section className="px-6 md:px-12 py-8 border-t border-b" style={{ borderColor: "#1a1a1a" }}>
        <FadeIn delay={0}>
          <p className="text-xs tracking-[0.4em] uppercase mb-8" style={{ color: "#C4693A" }}>— Type System</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0}>
            <div>
              <p className="text-xs font-mono mb-3" style={{ color: "#8B4513" }}>DISPLAY / HEADLINES</p>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  color: "#F5EDE0",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Kokumi
              </p>
              <p className="text-xs font-mono mt-3" style={{ color: "#8B4513" }}>Georgia / Playfair Display — Bold</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div>
              <p className="text-xs font-mono mb-3" style={{ color: "#8B4513" }}>BODY / LABELS</p>
              <p
                className="font-mono"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  color: "#F5EDE0",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  letterSpacing: "0.05em",
                }}
              >
                Warm Bowls. Bold Flavours.<br />
                Japanese comfort. Korean spice. Indian soul.<br />
                <span style={{ color: "#C4693A" }}>₹299 — Ramen</span>
              </p>
              <p className="text-xs font-mono mt-3" style={{ color: "#8B4513" }}>Courier New / Monospace — Regular</p>
            </div>
          </FadeIn>
        </div>

        {/* Font scale viz */}
        <FadeIn delay={200} className="mt-10 overflow-hidden">
          <div className="flex flex-col gap-1">
            {["KOKUMI", "WARM BOWLS", "BOLD FLAVOURS.", "Japanese comfort. Korean spice."].map((t, i) => {
              const sizes = ["text-5xl", "text-3xl", "text-xl", "text-base"];
              const opacities = [1, 0.8, 0.6, 0.4];
              return (
                <p
                  key={i}
                  className={`font-mono tracking-widest ${sizes[i]}`}
                  style={{ color: "#F5EDE0", opacity: opacities[i] }}
                >
                  {t}
                </p>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* ── SECTION 5 · DESIGN STYLE TAGS ── */}
      <section className="px-6 md:px-12 py-12">
        <FadeIn delay={0}>
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#C4693A" }}>— Design Language</p>
        </FadeIn>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {keywords.map((kw, i) => (
            <FadeIn key={kw} delay={i * 50}>
              <span
                className="px-4 py-2 text-xs font-mono tracking-widest uppercase cursor-default"
                style={{
                  border: "1px solid #C4693A",
                  color: "#C4693A",
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#C4693A";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#C4693A";
                }}
              >
                {kw}
              </span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SECTION 6 · SECOND COLLAGE (business cards layered feel) ── */}
      <section className="px-6 md:px-12 pb-12">
        <FadeIn delay={0}>
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C4693A" }}>— Brand Collateral</p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <ImageCard src={images.businessCardFront} label="Card Front" className="h-[140px] md:h-[200px]" aspectClass="" delay={0} />
          <ImageCard src={images.businessCardBack} label="Card Back" className="h-[140px] md:h-[200px]" aspectClass="" delay={80} />
          <ImageCard src={images.instagramPost} label="IG Post" className="h-[140px] md:h-[200px]" aspectClass="" delay={160} />
          <ImageCard src={images.standee} label="Standee" className="h-[140px] md:h-[200px]" aspectClass="" delay={240} />
        </div>
      </section>

      {/* ── SECTION 7 · BRAND VOICE ── */}
      <section
        className="px-6 md:px-12 py-16"
        style={{ background: "#0a0a0a" }}
      >
        <FadeIn delay={0}>
          <p className="text-xs tracking-[0.4em] uppercase mb-10" style={{ color: "#C4693A" }}>— Brand Voice</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { label: "TONE", value: "Warm. Grounded. Confident." },
            { label: "FEEL", value: "Like a bowl of ramen at 2am — exactly what you needed." },
            { label: "NOT", value: "Loud. Trendy. Try-hard." },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <div
                className="p-6 group cursor-default"
                style={{
                  border: "1px solid #1a1a1a",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#C4693A"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1a1a1a"}
              >
                <p className="text-xs font-mono tracking-widest mb-3" style={{ color: "#C4693A" }}>{item.label}</p>
                <p className="font-mono" style={{ color: "#F5EDE0", opacity: 0.85, lineHeight: 1.7 }}>{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "#F5EDE0",
              letterSpacing: "-0.01em",
            }}
          >
            Kokumi
          </p>
          <p className="text-xs font-mono mt-1" style={{ color: "#8B4513" }}>Warm Bowls. Bold Flavours.</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-mono" style={{ color: "#8B4513" }}>DESIGNED BY</p>
          <p className="text-sm font-mono" style={{ color: "#C4693A" }}>RAGHAV ASAWA</p>
          <p className="text-xs font-mono mt-1" style={{ color: "#8B4513" }}>2025 · BRAND SYSTEM</p>
        </div>
      </footer>
    </div>
  );
}