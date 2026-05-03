"use client";
import { useState } from "react";

const skills = [
  {
    id: "01",
    title: "Brand & Visual Identity",
    tag: "IDENTITY",
    image:
      "https://i.pinimg.com/1200x/62/2d/1b/622d1b9c3718530cb5a01211b64de857.jpg",
    points: [
      "Logo Design & Brand Marks",
      "Color Palette & Typography Systems",
      "Brand Guidelines & Visual Consistency",
    ],
  },
  {
    id: "02",
    title: "Social Media & Marketing Design",
    tag: "SOCIAL",
    image:
      "https://i.pinimg.com/736x/6e/88/83/6e88831da28e75113c473235af999398.jpg",
    points: [
      "Instagram Posts & Carousels",
      "Ad Creatives & Campaign Visuals",
      "Promotional Banners & Posters",
    ],
  },
  {
    id: "03",
    title: "Design & Visual Communication",
    tag: "VISUAL",
    image:
      "https://i.pinimg.com/736x/bb/c6/8d/bbc68de50d90c61aec34ed82384e3171.jpg",
    points: [
      "Layout & Composition",
      "Visual Hierarchy & Storytelling",
      "Typography & Color Theory",
    ],
  },
  {
    id: "04",
    title: "Creative Strategy",
    tag: "STRATEGY",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    points: [
      "Concept Development",
      "Moodboarding & Style Direction",
      "Audience-Focused Design Thinking",
    ],
  },
  {
    id: "05",
    title: "Motion & Video",
    tag: "MOTION",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    points: [
      "Simple Motion Graphics (After Effects)",
      "Social Media Video Editing (Premiere Pro)",
      "Reels & Short-form Content Editing",
    ],
  },
  {
    id: "06",
    title: "AI-Assisted Design",
    tag: "AI",
    image:
      "https://i.pinimg.com/736x/e8/9b/a7/e89ba76642d6ceb9645db3fd9bbdb51c.jpg",
    points: [
      "Image Generation for Visual Concepts",
      "Idea Generation & Creative Exploration",
      "Rapid Prototyping & Design Support",
    ],
  },
];

const tools = [
  { name: "Photoshop",    mastery: 95, icon: "/Images/Photoshop.png"  },
  { name: "Illustrator",  mastery: 80, icon: "/Images/Illustrator.png"},
  { name: "Canva",        mastery: 95, icon: "/Images/Canva.png"       },
  { name: "CorelDRAW",    mastery: 55, icon: "/Images/CorelDRAW.png"   },
  { name: "Premiere Pro", mastery: 60, icon: "/Images/Premiere .png"  },
  { name: "After Effects",mastery: 60, icon: "/Images/AfterEffects.png"},
];

export default function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        fontFamily: "var(--font-body)",
        color: "#e8e8e0",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          paddingTop: "120px",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          marginBottom: "60px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "32px",
              height: "1px",
              background: "#00e5ff",
            }}
          />
          CAPABILITIES
        </p>
        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 96px)",
            lineHeight: "1",
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          The skill{" "}
          <em
            style={{
              color: "#28deff",
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
            }}
          >
            set.
          </em>
        </h1>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.25)",
            marginTop: "16px",
          }}
        >
          HOVER TO EXPLORE EACH DISCIPLINE
        </p>
      </div>

      {/* ── SKILLS GRID ── */}
      <div
        style={{
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
          gap: "2px",
          marginBottom: "120px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              padding: "36px 32px",
              border: "1px solid rgba(255,255,255,0.5)",
              cursor: "default",
              transition: "all 0.35s ease",
              background:
                hoveredSkill === skill.id
                  ? "rgba(255,255,0,0.06)"
                  : "transparent",
              borderColor:
                hoveredSkill === skill.id
                  ? "rgba(255,255,0,0.25)"
                  : "rgba(255,255,255,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: skill.image ? `url(${skill.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter:
                  hoveredSkill === skill.id
                    ? "blur(4px) brightness(0.35)"
                    : "blur(12px) brightness(0.18)",
                transform:
                  hoveredSkill === skill.id ? "scale(1.06)" : "scale(1.12)",
                opacity: hoveredSkill === skill.id ? 0.85 : 0.5,
                transition:
                  "filter 0.55s ease, transform 0.55s ease, opacity 0.55s ease",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  hoveredSkill === skill.id
                    ? "linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.48) 100%)"
                    : "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 100%)",
                transition: "background 0.55s ease",
                zIndex: 1,
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <span
                style={{
                  position: "absolute",
                  top: "-18px",
                  right: "-8px",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color:
                    hoveredSkill === skill.id
                      ? "rgba(255,255,0,0.6)"
                      : "rgba(255,255,255,1)",
                  transition: "color 0.35s",
                }}
              >
                {skill.id}
              </span>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  color:
                    hoveredSkill === skill.id
                      ? "#00e5ff"
                      : "rgba(255,255,255,1)",
                  marginBottom: "12px",
                  transition: "color 0.35s",
                }}
              >
                {skill.tag}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: "clamp(18px, 2.5vw, 26px)",
                  marginBottom: "24px",
                  lineHeight: "1.2",
                  color:
                    hoveredSkill === skill.id
                      ? "#e8e8e0"
                      : "rgba(232,232,224,0.6)",
                  transition: "color 0.35s",
                }}
              >
                {skill.title}
              </h3>
              <div
                style={{
                  width: hoveredSkill === skill.id ? "40px" : "24px",
                  height: "1px",
                  background:
                    hoveredSkill === skill.id
                      ? "#28deff"
                      : "rgba(255,255,255,0.15)",
                  marginBottom: "20px",
                  transition: "all 0.5s ease",
                }}
              />
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {skill.points.map((pt, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.03em",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      transition: "color 0.35s",
                      transitionDelay: `${idx * 40}ms`,
                      color:
                        hoveredSkill === skill.id
                          ? "rgba(255,255,255,0.65)"
                          : "rgba(255,255,255,0.3)",
                    }}
                  >
                    <span
                      style={{
                        color: "#28deff",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      —
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── TOOLS ── */}
      <div
        style={{
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          marginBottom: "120px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "32px",
              height: "1px",
              background: "#28deff",
            }}
          />
          ARSENAL
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(32px, 5vw, 64px)",
            marginBottom: "48px",
            letterSpacing: "-0.02em",
          }}
        >
          The tools{" "}
          <em style={{ color: "#28deff", fontStyle: "italic" }}>I use.</em>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {/* ── header row — same responsive grid as ToolRow ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr minmax(0, 1fr)",
              gap: "clamp(10px, 2vw, 20px)",
              alignItems: "center",
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "4px",
            }}
          >
            <span />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              TOOL
            </span>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              MASTERY
            </span>
          </div>

          {tools.map((tool, i) => (
            <ToolRow key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>

      {/* ── DESIGN APPROACH ── */}
      <div
        style={{
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          paddingBottom: "120px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "32px",
                  height: "1px",
                  background: "#00e5ff",
                }}
              />
              PHILOSOPHY
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 52px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.15",
              }}
            >
              Design{" "}
              <em style={{ color: "#28deff", fontStyle: "italic" }}>
                approach.
              </em>
            </h2>
          </div>

          <div style={{ paddingTop: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              I don't design to fill space — I design to make something land.
              Every project starts with understanding what it needs to say, then
              building a visual language around that intention. Clean doesn't
              mean empty. Bold doesn't mean loud.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
                marginTop: "20px",
              }}
            >
              I obsess over spacing, type weights, and how elements breathe
              together. Whether it's a brand identity or a social post, the goal
              is the same — make it feel inevitable, like it couldn't have
              looked any other way.
            </p>
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {["Clean", "Intentional", "Type-first", "Dark mode only"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "6px 14px",
                      color: "rgba(255,255,255,0.45)",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--target); }
        }
        .tool-bar-fill {
          animation: fillBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--delay);
        }
      `}</style>
    </div>
  );
}

function ToolRow({ tool, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "36px 1fr minmax(0, 1fr)",
        gap: "clamp(10px, 2vw, 20px)",
        alignItems: "center",
        padding: "20px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.3s",
        background: hovered ? "rgba(255,255,255,0.02)" : "transparent",
        cursor: "pointer",
      }}
    >
      {/* icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={tool.icon}
          alt={tool.name}
          style={{
            width: "26px",
            height: "26px",
            objectFit: "contain",
            filter: hovered ? "none" : "grayscale(100%) opacity(0.7)",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* name */}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 500,
          fontSize: "clamp(15px, 2.5vw, 22px)",
          fontStyle: "italic",
          color: hovered ? "#e8e8e0" : "rgba(232,232,224,0.55)",
          transition: "color 0.3s",
          letterSpacing: "0.01em",
        }}
      >
        {tool.name}
      </span>

      {/* mastery bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 1.5vw, 12px)",
          minWidth: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            height: "2px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "99px",
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          <div
            className="tool-bar-fill"
            style={{
              "--target": `${tool.mastery}%`,
              "--delay": `${index * 100}ms`,
              height: "100%",
              width: `${tool.mastery}%`,
              background: hovered
                ? "linear-gradient(90deg, #00e5ff, #28deff)"
                : "linear-gradient(90deg, rgba(0,229,255,0.6), rgba(255,255,0,0.6))",
              borderRadius: "99px",
              transition: "background 0.3s",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: hovered ? "#28deff" : "rgba(255,255,255,0.2)",
            flexShrink: 0,
            transition: "color 0.3s",
          }}
        >
          {tool.mastery}%
        </span>
      </div>
    </div>
  );
}