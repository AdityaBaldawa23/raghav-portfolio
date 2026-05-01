"use client";

import { useState } from "react";
import Link from "next/link";

// ── SVG Icons (inline, no dependency) ──────────────────────────────────────
const icons = {
  Home: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  Work: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  Skills: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 17h7M17.5 14v7" />
    </svg>
  ),
  About: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Contact: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  Branding: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  ),
};

const NAV_ITEMS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/About" },
  { label: "Skills",   href: "/Skill" },
  { label: "Work",     href: "/Portfolio" },
  { label: "Branding", href: "/Branding" },
  { label: "Contact",  href: "/#contact" },
];

export default function LiquidGlassNavbar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <style>{`
        @keyframes streaksweep {
          0%   { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(220%) skewX(-12deg); opacity: 0; }
        }
        .streak-sweep {
          animation: streaksweep 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @keyframes pillpop {
          0%   { transform: scale(0.88); opacity: 0; }
          60%  { transform: scale(1.04); }
          100% { transform: scale(1);   opacity: 1; }
        }
        .pill-pop { animation: pillpop 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        .nav-item:hover .nav-icon { filter: drop-shadow(0 0 6px rgba(160,210,255,0.7)); }
        .nav-item:hover .nav-label {
          color: rgba(255,255,255,0.95) !important;
          text-shadow: 0 0 12px rgba(160,210,255,0.6);
        }
        .nav-item.active .nav-icon {
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));
        }
        .nav-item:active { transform: scale(0.93); }
        .nav-item { transition: transform 0.18s ease; }

        /* Mobile scaling */
        .nav-pill-item {
          padding: 8px 10px;
          min-width: 48px;
        }
        .nav-icon-wrap svg {
          width: 18px;
          height: 18px;
        }
        .nav-label-text {
          font-size: 0.58rem;
        }

        @media (min-width: 480px) {
          .nav-pill-item {
            padding: 9px 14px;
            min-width: 60px;
          }
          .nav-icon-wrap svg {
            width: 20px;
            height: 20px;
          }
          .nav-label-text {
            font-size: 0.63rem;
          }
        }

        @media (min-width: 768px) {
          .nav-pill-item {
            padding: 10px 20px;
            min-width: 72px;
          }
          .nav-icon-wrap svg {
            width: 22px;
            height: 22px;
          }
          .nav-label-text {
            font-size: 0.68rem;
          }
        }
      `}</style>

      <nav
        className="fixed top-8 left-1/2 z-50"
        style={{ transform: "translateX(-50%)", width: "max-content", maxWidth: "calc(100vw - 24px)" }}
      >
        <div
          className="relative flex items-center rounded-full overflow-hidden"
          style={{
            padding: "10px 6px",
            gap: "2px",
            background: `linear-gradient(
              160deg,
              rgba(255,255,255,0.13) 0%,
              rgba(180,200,255,0.07) 50%,
              rgba(120,140,255,0.05) 100%
            )`,
            backdropFilter: "blur(28px) saturate(180%) brightness(1.12)",
            WebkitBackdropFilter: "blur(28px) saturate(180%) brightness(1.12)",
            border: "1px solid rgba(255,255,255,0.22)",
          }}
        >
          {/* Top refraction edge */}
          <div
            className="pointer-events-none absolute top-0 left-[6%] right-[6%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.55) 25%, rgba(200,225,255,0.75) 50%, rgba(255,255,255,0.55) 75%, transparent)",
              filter: "blur(0.3px)",
            }}
          />

          {/* Animated light sweep */}
          <div
            className="streak-sweep pointer-events-none absolute inset-0 w-[40%]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 50%, transparent)",
            }}
          />

          {/* Nav items */}
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`nav-item nav-pill-item ${isActive ? "active" : ""} relative flex flex-col items-center justify-center gap-1 cursor-pointer border-0 bg-transparent`}
                style={{
                  borderRadius: "50px",
                  outline: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
                aria-label={item.label}
              >
                {/* Active pill */}
                {isActive && (
                  <span
                    className="pill-pop absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(
                        160deg,
                        rgba(30,35,80,0.75) 0%,
                        rgba(20,25,65,0.85) 100%
                      )`,
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 12px rgba(0,0,0,0.4)",
                    }}
                  />
                )}

                {/* Icon */}
                <span
                  className="nav-icon nav-icon-wrap relative z-10 transition-all duration-300"
                  style={{
                    color: isActive
                      ? "rgba(255,255,255,0.96)"
                      : "rgba(255,255,255,0.6)",
                  }}
                >
                  {icons[item.label]}
                </span>

                {/* Label */}
                <span
                  className="nav-label nav-label-text relative z-10 font-medium select-none transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.03em",
                    color: isActive
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.52)",
                    textShadow: isActive
                      ? "0 0 14px rgba(200,220,255,0.5)"
                      : "none",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}