"use client";

import { useState } from "react";
import Link from "next/link";

/*
  ─── FONTS ──────────────────────────────────────────────────────────────────────
  Assumes globals.css already has:
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Geist+Mono:wght@300;400&display=swap');

  ─── PALETTE ────────────────────────────────────────────────────────────────────
  Cyan   → #22d3ee
  Yellow → #facc15
  White  → text only
  Background → #0a0a0c
*/

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Work",    href: "/Portfolio" },
  { label: "About",   href: "/About" },
  { label: "Contact", href: "/#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raghavasawa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rexorystudio?igsh=c2E3Nmo1cnc4eWg3",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

// ─── Hoverable nav link ────────────────────────────────────────────────────────
function NavLink({ href, label, accent = "cyan" }) {
  const [hovered, setHovered] = useState(false);
  const color = accent === "yellow"
    ? "rgba(250,204,21,0.82)"
    : "rgba(34,211,238,0.82)";

  return (
    <Link
      href={href}
      style={{ textDecoration: "none", position: "relative", display: "inline-block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontFamily: "'Geist Mono','Courier New',monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: hovered ? color : "rgba(255,255,255,0.38)",
          transition: "color 0.32s ease",
        }}
      >
        {label}
      </span>
      {/* Underline slide */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-2px",
          left: 0,
          height: "1px",
          width: hovered ? "100%" : "0%",
          background: color,
          transition: "width 0.36s cubic-bezier(0.16,1,0.3,1)",
          display: "block",
        }}
      />
    </Link>
  );
}

// ─── Hoverable social link ─────────────────────────────────────────────────────
function SocialLink({ href, label, icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ textDecoration: "none", display: "inline-flex" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
          color: hovered ? "rgba(250,204,21,0.82)" : "rgba(255,255,255,0.28)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "color 0.32s ease, transform 0.32s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {icon}
        <span
          style={{
            fontFamily: "'Geist Mono','Courier New',monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      </span>
    </a>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <>
      <style>{`
        @media (max-width: 680px) {
          .footer-main { flex-direction: column !important; gap: 2.5rem !important; }
          .footer-nav  { justify-content: flex-start !important; }
          .footer-social { justify-content: flex-start !important; }
        }
      `}</style>

      <footer
        style={{
          width: "100%",
          background: "#0a0a0c",
          borderTop: "1px solid rgba(40,255,255,0.6)",
          padding: "clamp(2.5rem,5vh,3.75rem) clamp(1.5rem,5vw,4.5rem) clamp(1.5rem,3vh,2.5rem)",
        }}
      >
        {/* ── Main row ──────────────────────────────────────────────────────── */}
        <div
          className="footer-main"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "clamp(2rem,4vh,3rem)",
          }}
        >

          {/* LEFT: Wordmark */}
          <div style={{ flexShrink: 0 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "'Cormorant',Georgia,serif",
                  fontWeight: 300,
                  fontSize: "clamp(1.6rem,2.8vw,2.2rem)",
                  letterSpacing: "-0.02em",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1,
                }}
              >
                Raghav Asawa
                <em
                  style={{
                    fontStyle: "italic",
                    color: "rgba(34,211,238,0.65)",
                    marginLeft: "0.06em",
                  }}
                >
                  .
                </em>
              </span>
            </Link>
            <p
              style={{
                fontFamily: "'Geist Mono','Courier New',monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                margin: "0.55rem 0 0",
              }}
            >
              Brand & Identity Designer
            </p>
          </div>

          {/* CENTER: Nav links */}
          <nav
            className="footer-nav"
            aria-label="Footer navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1.5rem,3vw,2.5rem)",
              flexWrap: "wrap",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                accent={i % 2 === 0 ? "cyan" : "yellow"}
              />
            ))}
          </nav>

          {/* RIGHT: Social links */}
          <div
            className="footer-social"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {SOCIAL_LINKS.map((s) => (
              <SocialLink key={s.label} href={s.href} label={s.label} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* ── Divider ────────────────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            height: "1px",
            background:
              "rgba(40, 255, 255, 0.6)",
            marginBottom: "clamp(1rem,2.5vh,1.75rem)",
          }}
        />

        {/* ── Bottom row ─────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono','Courier New',monospace",
              fontSize: "0.54rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.14)",
            }}
          >
            © 2026 Raghav Asawa. All rights reserved.
          </span>

          <span
            style={{
              fontFamily: "'Cormorant',Georgia,serif",
              fontStyle: "italic",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.12)",
            }}
          >
            Designed & built with intention.
          </span>
        </div>
      </footer> 
    </>
  );
}