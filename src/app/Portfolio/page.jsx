"use client";
import { useState, useRef, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   DATA — swap src paths to your actual images
───────────────────────────────────────────── */
const reelItems = [
  {
    src: "/Images/Social/social1.jpeg",
    label: "Kokumi Menu",
    category: "Brand Identity",
  },
  {
    src: "/Images/Social/social2.jpeg",
    label: "Kokumi Standee",
    category: "Print",
  },
  {
    src: "/Images/Social/social3.jpeg",
    label: "Poster One",
    category: "Poster Design",
  },
  {
    src: "/Images/Social/social4.jpeg",
    label: "Brand Mark",
    category: "Logo Design",
  },
  {
    src: "/Images/Social/social5.jpeg",
    label: "Social Creative",
    category: "Social Media",
  },
  {
    src: "/Images/Social/social6.jpeg",
    label: "Poster Two",
    category: "Poster Design",
  },
  {
    src: "/Images/Social/social7.jpeg",
    label: "Poster Two",
    category: "Poster Design",
  },
  {
    src: "/Images/Social/social8.jpeg",
    label: "Poster Two",
    category: "Poster Design",
  },
  {
    src: "/Images/Social/social9.jpeg",
    label: "Poster Two",
    category: "Poster Design",
  },
];

const logos = [
  {
    src: "/Images/Logos/logo1.png",
    name: "Devil Scout",
    desc: "YT Channel · Brand Identity",
    accent: "#AA6C36",
  },
  {
    src: "/Images/Logos/logo2.png",
    name: "Rex",
    desc: "Creative · Mark Design",
    accent: "#2D6A4F",
  },
  {
    src: "/Images/Logos/logo3.png",
    name: "Work Space",
    desc: "Studio · Graphics",
    accent: "#E63946",
  },
  {
    src: "/Images/Logos/logo4.png",
    name: "Kokumi",
    desc: "Cafe · Brand Identity",
    accent: "#C9A84C",
  },
  {
    src: "/Images/Logos/logo5.png",
    name: "Rexory",
    desc: "Studio · Symbol",
    accent: "#457B9D",
  },
  {
    src: "/Images/Logos/logo6.jpeg",
    name: "Rajput Royals",
    desc: "Luxury · Monogram",
    accent: "#C9A84C",
  },
];

const socialItems = [
  {
    src: "/Images/Social/social1.jpeg",
    tag: "Brand Campaign",
    title: "Kokumi Launch Series",
    span: "5",
  },
  {
    src: "/Images/Social/social2.jpeg",
    tag: " Media",
    title: "Event Promo",
    span: "3",
  },
  {
    src: "/Images/Social/social3.jpeg",
    tag: "Campaign",
    title: "Product Reveal",
    span: "4",
  },
  {
    src: "/Images/Social/social4.jpeg",
    tag: "Instagram",
    title: "Feed Post",
    span: "3",
  },
  {
    src: "/Images/Social/social5.jpeg",
    tag: "Reel Cover",
    title: "Motion Frame",
    span: "4",
  },
  {
    src: "/Images/Social/social6.jpeg",
    tag: "Story",
    title: "Story Series",
    span: "5",
  },
];

const posters = [
  { src: "/Images/Posters/poster1.jpeg", title: "Poster 01" },
  { src: "/Images/Posters/poster2.jpeg", title: "Poster 02" },
  { src: "/Images/Posters/poster3.jpeg", title: "Poster 03" },
  { src: "/Images/Posters/poster4.jpeg", title: "Poster 04" },
  { src: "/Images/Posters/poster5.jpeg", title: "Poster 05" },
  { src: "/Images/Posters/poster6.jpeg", title: "Poster 06" },
  { src: "/Images/Posters/poster7.jpeg", title: "Poster 07" },
  { src: "/Images/Posters/poster8.jpeg", title: "Poster 08" },
  { src: "/Images/Posters/poster9.jpeg", title: "Poster 09" },
];

const carouselSets = [
  {
    title: "Reusing Leftover Fabric Series",
    tag: "Brand Campaign",
    slides: [
      "/Images/Carousel1/1.png",
      "/Images/Carousel1/2.png",
      "/Images/Carousel1/3.png",
      "/Images/Carousel1/4.png",
      "/Images/Carousel1/5.png",
      "/Images/Carousel1/6.png",
      "/Images/Carousel1/7.png",
      "/Images/Carousel1/8.png",
    ],
  },
  {
    title: "Adding Flowers for Decoration",
    tag: "Social Media",
    slides: [
      "/Images/Carousel2/1.png",
      "/Images/Carousel2/2.png",
      "/Images/Carousel2/3.png",
      "/Images/Carousel2/4.png",
      "/Images/Carousel2/5.png",
      "/Images/Carousel2/6.png",
      "/Images/Carousel2/7.png",
      "/Images/Carousel2/8.png",
      "/Images/Carousel2/9.png",
      "/Images/Carousel2/10.png",
    ],
  },
];

/* ─────────────────────────────────────────────
   HERO REEL CAROUSEL
───────────────────────────────────────────── */
function HeroReel() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const total = reelItems.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const onPointerDown = (e) => {
    setDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    setDragDelta(e.clientX - dragStart);
  };
  const onPointerUp = () => {
    if (dragDelta < -60) next();
    else if (dragDelta > 60) prev();
    setDragging(false);
    setDragDelta(0);
  };

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section
      style={{
        width: "100%",
        background: "#0a0a0a",
        paddingTop: "130px",
        paddingBottom: "80px",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* Section label */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-body)",
            marginBottom: "12px",
          }}
        >
          — SELECTED WORK
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 400,
            color: "#e8e8e0",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          The work{" "}
          <em
            style={{
              color: "#28deff",
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
            }}
          >
            speaks.
          </em>
        </h2>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.18)",
            marginTop: "14px",
            fontFamily: "var(--font-body)",
          }}
        >
          DRAG TO EXPLORE
        </p>
      </div>

      {/* Filmstrip */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ cursor: dragging ? "grabbing" : "grab", touchAction: "none" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            padding: "20px 0",
          }}
        >
          {reelItems.map((item, i) => {
            const offset = i - active;
            const isActive = offset === 0;
            const isPrev = offset === -1 || (active === 0 && i === total - 1);
            const isNext = offset === 1 || (active === total - 1 && i === 0);
            const isVisible = isActive || isPrev || isNext;

            let translateX = 0;
            let scale = 0.72;
            let opacity = 0;
            let zIndex = 0;
            let width = "clamp(180px, 22vw, 280px)";

            if (isActive) {
              translateX = dragDelta * 0.4;
              scale = 1;
              opacity = 1;
              zIndex = 10;
              width = "clamp(260px, 38vw, 480px)";
            } else if (offset === -1 || (active === 0 && i === total - 1)) {
              translateX = dragDelta * 0.15 - 20;
              scale = 0.78;
              opacity = 0.5;
              zIndex = 5;
            } else if (offset === 1 || (active === total - 1 && i === 0)) {
              translateX = dragDelta * 0.15 + 20;
              scale = 0.78;
              opacity = 0.5;
              zIndex = 5;
            } else if (Math.abs(offset) === 2) {
              scale = 0.62;
              opacity = 0.2;
              zIndex = 1;
              translateX = offset > 0 ? 40 : -40;
            } else {
              opacity = 0;
            }

            return (
              <div
                key={i}
                onClick={() => !dragging && setActive(i)}
                style={{
                  flexShrink: 0,
                  width,
                  transition: dragging
                    ? "none"
                    : "all 0.55s cubic-bezier(0.16,1,0.3,1)",
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  position: "relative",
                  display: Math.abs(i - active) > 2 ? "none" : "block",
                }}
              >
                <div
                  style={{
                    aspectRatio: "3/4",
                    overflow: "hidden",
                    background: "#111",
                    boxShadow: isActive
                      ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(184,160,106,0.15)"
                      : "0 8px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                {isActive && (
                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        color: "#28deff",
                        fontFamily: "var(--font-body)",
                        marginBottom: "5px",
                      }}
                    >
                      {item.category}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "italic",
                        fontSize: "clamp(15px, 2vw, 20px)",
                        color: "#e8e8e0",
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          marginTop: "36px",
        }}
      >
        {reelItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? "28px" : "6px",
              height: "2px",
              background: i === active ? "#28deff" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.4s ease",
              borderRadius: "99px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LOGO SHOWCASE
───────────────────────────────────────────── */
function LogoShowcase() {
  const [hovered, setHovered] = useState(null);
  const [modal, setModal] = useState(null);

  return (
    <section
      style={{
        background: "#0d0d0d",
        padding: "100px clamp(24px, 6vw, 80px) 110px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Modal */}
      {modal !== null && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#111",
              border: `1px solid ${logos[modal].accent}30`,
              padding: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              maxWidth: "480px",
              width: "90vw",
              boxShadow: `0 0 80px ${logos[modal].accent}18`,
            }}
          >
            {/* Close */}
            <button
              onClick={() => setModal(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.3)",
                fontSize: "22px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <img
              src={logos[modal].src}
              alt={logos[modal].name}
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "26px",
                  color: "#e8e8e0",
                  marginBottom: "8px",
                }}
              >
                {logos[modal].name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  color: logos[modal].accent,
                  textTransform: "uppercase",
                }}
              >
                {logos[modal].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginBottom: "64px" }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-body)",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#00e5ff",
            }}
          />
          LOGO DESIGN
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 400,
            color: "#e8e8e0",
            letterSpacing: "-0.02em",
          }}
        >
          Marks that{" "}
          <em style={{ color: "#28deff", fontFamily: "var(--font-heading)" }}>
            endure.
          </em>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setModal(i)}
            style={{
              aspectRatio: "1 / 1",
              background: hovered === i ? "#141414" : "#0d0d0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-in",
              transition: "background 0.35s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  hovered === i
                    ? `radial-gradient(circle at 50% 50%, ${logo.accent}16 0%, transparent 70%)`
                    : "transparent",
                transition: "background 0.6s",
              }}
            />

            {/* Accent border */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: `1px solid ${hovered === i ? logo.accent + "30" : "transparent"}`,
                transition: "border-color 0.35s",
                pointerEvents: "none",
              }}
            />

            {/* Logo — fills the box */}
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: hovered === i ? "brightness(1)" : "brightness(0.5)",
                transition:
                  "filter 0.45s, transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                transform: hovered === i ? "scale(1.04)" : "scale(1)",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />

            {/* Hover label overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)`,
                opacity: hovered === i ? 1 : 0,
                transition: "opacity 0.35s",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "24px",
                pointerEvents: "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "17px",
                  color: "#e8e8e0",
                  marginBottom: "5px",
                }}
              >
                {logo.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  color: logo.accent,
                  textTransform: "uppercase",
                }}
              >
                {logo.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.12)",
          fontFamily: "var(--font-body)",
          marginTop: "24px",
        }}
      >
        6 MARKS · 2024–PRESENT
      </p>
    </section>
  );
}

/* ─────────────────────────────────────────────
   POSTER WALL
───────────────────────────────────────────── */
function PosterWall() {
  const [hovered, setHovered] = useState(null);
  const rotations = [-1.5, 0.8, -0.5, 1.2, -0.9, 0.4, -1.1, 0.7, -0.3];

  return (
    <section
      style={{
        background: "#080808",
        padding: "100px clamp(24px, 6vw, 80px) 110px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          marginBottom: "64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-body)",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "28px",
                height: "1px",
                background: "#28deff",
              }}
            />
            PRINT & EDITORIAL
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 400,
              color: "#e8e8e0",
              letterSpacing: "-0.02em",
            }}
          >
            Posters that{" "}
            <em style={{ color: "#28deff", fontFamily: "var(--font-heading)" }}>
              arrest.
            </em>
          </h2>
        </div>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.2)",
            fontFamily: "var(--font-body)",
          }}
        >
          HOVER TO FOCUS
        </p>
      </div>

      {/* Masonry-style 3-col grid */}
      <div
        style={{
          columns: "3",
          columnGap: "16px",
          lineHeight: 0,
        }}
        className="poster-columns"
      >
        {posters.map((poster, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              breakInside: "avoid",
              marginBottom: "16px",
              display: "inline-block",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              transition:
                "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
              transform:
                hovered === i
                  ? `rotate(0deg) scale(1.02)`
                  : `rotate(${rotations[i]}deg) scale(1)`,
              boxShadow:
                hovered === i
                  ? "0 24px 60px rgba(0,0,0,0.8)"
                  : "0 6px 20px rgba(0,0,0,0.5)",
              zIndex: hovered === i ? 10 : 1,
            }}
          >
            <img
              src={poster.src}
              alt={poster.title}
              style={{
                width: "100%",
                display: "block",
                lineHeight: 0,
                filter:
                  hovered !== null && hovered !== i
                    ? "brightness(0.35)"
                    : "brightness(1)",
                transition: "filter 0.4s ease",
              }}
            />
            {/* Title overlay on hover */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                opacity: hovered === i ? 1 : 0,
                transition: "opacity 0.35s ease",
                display: "flex",
                alignItems: "flex-end",
                padding: "20px 18px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "#e8e8e0",
                  letterSpacing: "0.02em",
                }}
              >
                {poster.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .poster-columns { columns: 2 !important; } }
        @media (max-width: 480px) { .poster-columns { columns: 1 !important; } }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INSTAGRAM PHONE CAROUSEL
───────────────────────────────────────────── */
function PhoneCarousel() {
  const [activeSet, setActiveSet] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [phoneW, setPhoneW] = useState(520);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setScreenWidth(vw);

      if (vw < 480) setPhoneW(300);
      else if (vw < 640) setPhoneW(340);
      else if (vw < 900) setPhoneW(400);
      else setPhoneW(520);
    };

    update(); // initial run
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const PHONE_H = Math.round(phoneW * (736 / 520));
  const SCREEN_W = Math.round(phoneW * (496 / 520));
  const SCREEN_H = Math.round(phoneW * (712 / 520));
  const RADIUS_OUT = Math.round(phoneW * (44 / 520));
  const RADIUS_IN = Math.round(phoneW * (38 / 520));
  const STATUS_H = Math.round(phoneW * (50 / 520));
  const igBarH = Math.round(phoneW * (48 / 520));
  const bottomBarH = Math.round(phoneW * (92 / 520));

  const set = carouselSets[activeSet];
  const total = set.slides.length;

  const goNext = useCallback(
    () => setSlideIndex((s) => Math.min(s + 1, total - 1)),
    [total],
  );
  const goPrev = useCallback(
    () => setSlideIndex((s) => Math.max(s - 1, 0)),
    [],
  );
  useEffect(() => {
    setSlideIndex(0);
  }, [activeSet]);

  const onPointerDown = (e) => {
    setDragStart(e.clientX);
    setDragDelta(0);
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStart);
  };
  const onPointerUp = () => {
    if (dragDelta < -40) goNext();
    else if (dragDelta > 40) goPrev();
    setIsDragging(false);
    setDragDelta(0);
  };

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding:
          "clamp(48px,8vw,100px) clamp(16px,6vw,80px) clamp(60px,10vw,120px)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* ── header ── */}
      <div style={{ marginBottom: "clamp(32px,5vw,64px)" }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-body)",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#00e5ff",
            }}
          />
          INSTAGRAM CAROUSELS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(24px,5vw,60px)",
            fontWeight: 400,
            color: "#e8e8e0",
            letterSpacing: "-0.02em",
          }}
        >
          Swipe the{" "}
          <em style={{ color: "#28deff", fontFamily: "var(--font-heading)" }}>
            story.
          </em>
        </h2>
      </div>

      {/* ── main grid ── */}
      <div
        style={{
          display: "grid",
          /* desktop: side-by-side | tablet+mobile: stacked */
          gridTemplateColumns:
            phoneW >= 480 && screenWidth >= 900 ? "1fr auto" : "1fr",
          gap: "clamp(24px,4vw,48px)",
          alignItems: "center",
        }}
      >
        {/* ── LEFT: tabs + nav ── */}
        <div>
          {/* Tab list — horizontal scroll on mobile */}
          <div
            style={{
              display: "flex",
              flexDirection: screenWidth < 640 ? "row" : "column",
              overflowX: screenWidth < 640 ? "auto" : "visible",
              gap: screenWidth < 640 ? "8px" : "2px",
              marginBottom: "clamp(24px,4vw,48px)",
              paddingBottom: screenWidth < 640 ? "4px" : 0,
              /* hide scrollbar on mobile */
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {carouselSets.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSet(i)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  flexShrink: 0,
                  padding: screenWidth < 640 ? "10px 14px" : "18px 24px",
                  borderLeft:
                    screenWidth >= 640
                      ? `2px solid ${activeSet === i ? "#28deff" : "rgba(255,255,255,0.08)"}`
                      : "none",
                  borderBottom:
                    screenWidth < 640
                      ? `2px solid ${activeSet === i ? "#28deff" : "rgba(255,255,255,0.08)"}`
                      : "none",
                  borderRadius: screenWidth < 640 ? "6px 6px 0 0" : 0,
                  transition: "all 0.3s",
                  background:
                    screenWidth < 640 && activeSet === i
                      ? "rgba(40,222,255,0.06)"
                      : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color:
                      activeSet === i ? "#28deff" : "rgba(255,255,255,0.25)",
                    marginBottom: "4px",
                  }}
                >
                  {s.tag}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "clamp(13px,1.8vw,22px)",
                    color:
                      activeSet === i ? "#e8e8e0" : "rgba(232,232,224,0.3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.title}
                </p>
              </button>
            ))}
          </div>

          {/* Arrow nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {[
              ["←", goPrev, slideIndex === 0],
              ["→", goNext, slideIndex === total - 1],
            ].map(([arrow, fn, dis], i) => (
              <button
                key={i}
                onClick={fn}
                disabled={dis}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "none",
                  cursor: dis ? "not-allowed" : "pointer",
                  color: dis ? "rgba(255,255,255,0.15)" : "#e8e8e0",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                {arrow}
              </button>
            ))}
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.15em",
              }}
            >
              {String(slideIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Phone shell ── */}
        <div style={{ flexShrink: 0, margin: "0 auto" }}>
          <div
            style={{
              width: `${phoneW}px`,
              height: `${PHONE_H}px`,
              background: "linear-gradient(145deg,#1c1c1e,#2c2c2e)",
              borderRadius: `${RADIUS_OUT}px`,
              border: "1.5px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 50px 120px rgba(0,0,0,0.85),inset 0 1px 0 rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Side buttons */}
            {[
              { t: "92px", l: "-4px", w: "3px", h: "28px" },
              { t: "130px", l: "-4px", w: "3px", h: "28px" },
              { t: "110px", r: "-4px", w: "3px", h: "44px" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  background: "#222",
                  borderRadius: "2px",
                  top: s.t,
                  left: s.l,
                  right: s.r,
                  width: s.w,
                  height: s.h,
                }}
              />
            ))}

            {/* Dynamic island */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                width: `${Math.round((phoneW * 104) / 520)}px`,
                height: `${Math.round((phoneW * 28) / 520)}px`,
                background: "#000",
                borderRadius: "20px",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#111",
                  border: "1px solid #2a2a2e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#0a0a14",
                  }}
                />
              </div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#111",
                  border: "1px solid #2a2a2e",
                }}
              />
            </div>

            {/* Screen */}
            <div
              style={{
                width: `${SCREEN_W}px`,
                height: `${SCREEN_H}px`,
                background: "#000",
                borderRadius: `${RADIUS_IN}px`,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* … all inner screen elements (status bar, IG bar, slides, actions)
                  remain exactly the same — just replace any hardcoded pixel
                  measurements that need to flex with the scaled values above.
                  The SCREEN_W value fed to the slide translate is now dynamic. */}

              {/* Instagram Top Bar */}
              <div
                style={{
                  position: "absolute",
                  top: `${STATUS_H}px`,
                  left: 0,
                  right: 0,
                  height: `${igBarH}px`,
                  background: "rgba(0,0,0,0.9)",
                  backdropFilter: "blur(14px)",
                  zIndex: 25,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                  gap: "9px",
                  borderBottom: "0.5px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/Images/Logos/instalogo.png"
                    className="rounded-2xl object-cover border border-white"
                  />
                </div>

                {/* Username */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "11px", color: "#fff" }}>
                    Rexory Studio
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}
                  >
                    Original audio
                  </p>
                </div>

                {/* Follow Button */}
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/rexorystudio?igsh=c2E3Nmo1cnc4eWg3",
                      "_blank",
                    )
                  }
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "6px",
                    padding: "4px 10px",
                    fontSize: "10px",
                    color: "#fff",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Follow
                </button>
              </div>

              {/* Slides viewport */}
              <div
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                style={{
                  position: "absolute",
                  top: "98px",
                  left: 0,
                  right: 0,
                  bottom: "92px",
                  overflow: "hidden",
                  cursor: isDragging ? "grabbing" : "grab",
                  touchAction: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: `${total * SCREEN_W}px`,
                    height: "100%",
                    transform: `translateX(${-(slideIndex * SCREEN_W) + (isDragging ? dragDelta * 0.65 : 0)}px)`,
                    transition: isDragging
                      ? "none"
                      : "transform 0.38s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {set.slides.map((src, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${SCREEN_W}px`,
                        height: "100%",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={src}
                        alt={`Slide ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom Action Bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: `${bottomBarH}px`,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "6px",
                  zIndex: 20,
                }}
              >
                {/* Icons */}
                <div style={{ display: "flex", gap: "14px" }}>
                  <span>🤍</span>
                  <span>💬</span>
                  <span>↗</span>
                  <div style={{ flex: 1 }} />
                  <span>🔖</span>
                </div>

                {/* Likes */}
                <p style={{ fontSize: "10px", color: "#fff" }}>2,847 likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function WorkPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0a; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 99px; }
        button:focus { outline: none; }
      `}</style>
      <main>
        <HeroReel />
        <LogoShowcase />
        <PosterWall />
        <PhoneCarousel />
      </main>
    </>
  );
}
