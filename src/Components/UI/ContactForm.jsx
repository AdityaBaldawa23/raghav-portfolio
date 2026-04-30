"use client";

import { useState, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/rexorystudio?igsh=c2E3Nmo1cnc4eWg3",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raghavasawa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

// ─── Left Panel — cursor glow + headline ──────────────────────────────────────
function LeftPanel() {
  const panelRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  // Blend cyan → yellow based on vertical mouse position
  // top = cyan, bottom = yellow
  const glowColor =
    glow.y < 40
      ? "rgba(34,211,238,0.18)"
      : glow.y > 65
        ? "rgba(250,204,21,0.16)"
        : "rgba(34,211,238,0.13)";

  return (
    <div
      ref={panelRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        flex: "1 1 48%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(2.5rem,5vw,4rem)",
        minHeight: "clamp(420px,60vh,640px)",
        overflow: "hidden",
        borderRadius: "1.25rem",
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.015)",
        cursor: "default",
      }}
    >
      {/* Cursor-tracked radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(42% 42% at ${glow.x}% ${glow.y}%, ${glowColor} 0%, transparent 100%)`,
          opacity: glow.opacity,
          transition: `opacity 0.55s ease, background 0.18s ease`,
          zIndex: 0,
        }}
      />

      {/* Top: eyebrow */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
        }}
      >
        <div
          style={{
            width: "1.2rem",
            height: "1px",
            background: "rgba(34,211,238,0.55)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.58rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "rgba(40,255,255,1)",
          }}
        >
          Let's talk
        </span>
      </div>

      {/* Center: headline */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(2.4rem,4.8vw,4.5rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.92)",
            margin: "0 0 1.25rem",
          }}
        >
          Got an idea?
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "rgba(34,211,238,0.72)",
            }}
          >
            Let's build it.
          </em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: "clamp(0.95rem,1.25vw,1.1rem)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.3)",
            maxWidth: "30ch",
            margin: 0,
          }}
        >
          Open to brand identity, logo design, and editorial work. Always
          curious about the right project.
        </p>
      </div>

      {/* Bottom: contact + social strip */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg,rgba(34,211,238,0.35),transparent)",
            width: "100%",
          }}
        />

        {/* Email link */}
        <a
          href="mailto:hello@yourname.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "rgba(34,211,238,0.75)",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(34,211,238,1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(34,211,238,0.75)")
            }
          >
            raghavasawa24.com
          </span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 8L8 2M8 2H3.5M8 2V6.5"
              stroke="rgba(34,211,238,0.6)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Social links row */}
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.58rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.22)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(250,204,21,0.75)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.22)")
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Field — reusable form input / textarea ────────────────────────────────────
function Field({
  label,
  id,
  type = "text",
  multiline = false,
  value,
  onChange,
  placeholder,
  rows,
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  const borderColor = focused
    ? "rgba(34,211,238,0.55)"
    : hasValue
      ? "rgba(255,255,255,0.15)"
      : "rgba(255,255,255,0.08)";

  const glowColor = focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none";

  const sharedStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.025)",
    border: `1px solid ${borderColor}`,
    borderRadius: "0.625rem",
    padding: "1rem 1.1rem",
    paddingTop: multiline ? "1.1rem" : "1rem",
    color: "rgba(255,255,255,0.88)",
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    lineHeight: 1.55,
    outline: "none",
    boxShadow: glowColor,
    transition: `border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease`,
    resize: "none",
    boxSizing: "border-box",
    caretColor: "rgba(34,211,238,0.9)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "'Geist Mono','Courier New',monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: focused ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.28)",
          transition: "color 0.35s ease",
        }}
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={rows || 5}
          style={{
            ...sharedStyle,
            // Safari/Chrome placeholder
          }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

// ─── Select Field ──────────────────────────────────────────────────────────────
function SelectField({ label, id, value, onChange }) {
  const [focused, setFocused] = useState(false);

  const borderColor = focused
    ? "rgba(34,211,238,0.55)"
    : value
      ? "rgba(255,255,255,0.15)"
      : "rgba(255,255,255,0.08)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "'Geist Mono','Courier New',monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: focused ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.28)",
          transition: "color 0.35s ease",
        }}
      >
        {label}
      </label>

      <div style={{ position: "relative" }}>
        <select
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            appearance: "none",
            background: "rgba(255,255,255,0.025)",
            border: `1px solid ${borderColor}`,
            borderRadius: "0.625rem",
            padding: "1rem 2.5rem 1rem 1.1rem",
            color: value ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: 1.55,
            outline: "none",
            boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
            cursor: "pointer",
            transition: "border-color 0.35s ease, box-shadow 0.35s ease",
            boxSizing: "border-box",
          }}
        >
          <option value="" disabled style={{ background: "#0a0a0c" }}>
            Select a project type
          </option>
          {[
            "Logo Design",
            "Brand Identity",
            "Poster / Print",
            "Full Brand System",
            "Other",
          ].map((opt) => (
            <option key={opt} value={opt} style={{ background: "#0a0a0c" }}>
              {opt}
            </option>
          ))}
        </select>

        {/* Custom dropdown chevron */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1l4 4 4-4"
              stroke={
                focused ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.3)"
              }
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Right Panel — contact form ────────────────────────────────────────────────
function RightPanel() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        project: form.project,
        message: form.message,
      };

      // 🔹 1. Send email to YOU (admin)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      // 🔹 2. Send auto-reply to USER
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div
      style={{
        flex: "1 1 48%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(2.5rem,5vw,4rem)",
        borderRadius: "1.25rem",
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.015)",
        minHeight: "clamp(420px,60vh,640px)",
      }}
    >
      {submitted ? (
        // ── Success state ──
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1.25rem",
            height: "100%",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              border: "1px solid rgba(34,211,238,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8l3.5 3.5L13 4"
                stroke="rgba(34,211,238,0.85)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              fontSize: "clamp(1.5rem,2.5vw,2rem)",
              color: "rgba(255,255,255,0.88)",
              margin: 0,
            }}
          >
            Message sent.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            I'll be in touch soon.
          </p>
        </div>
      ) : (
        // ── Form ──
        <>
          <div style={{ marginBottom: "clamp(1.5rem,3vh,2.25rem)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                marginBottom: "0.7rem",
              }}
            >
              <div
                style={{
                  width: "1.2rem",
                  height: "1px",
                  background: "rgba(250,204,21,0.55)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "#ffff00",
                }}
              >
                Send a message
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "clamp(1.5rem,2.5vw,2.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.88)",
                margin: 0,
              }}
            >
              Start the{" "}
              <em
                style={{ fontStyle: "italic", color: "rgba(250,204,21,0.72)" }}
              >
                conversation.
              </em>
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.35rem",
            }}
          >
            {/* Name + Email row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
              className="form-grid"
            >
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={set("name")}
                placeholder="Your name"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="your@email.com"
              />
            </div>

            {/* Project type */}
            <SelectField
              label="Project Type"
              id="project"
              value={form.project}
              onChange={set("project")}
            />

            {/* Message */}
            <Field
              label="Message"
              id="message"
              multiline
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="Tell me about your project..."
            />

            {/* Submit */}
            <button
              type="submit"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                alignSelf: "flex-start",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 2rem",
                borderRadius: "0.625rem",
                border: `1px solid ${
                  btnHovered
                    ? "rgba(34,211,238,0.55)"
                    : "rgba(255,255,255,0.12)"
                }`,
                background: btnHovered
                  ? "rgba(34,211,238,0.08)"
                  : "rgba(255,255,255,0.04)",
                boxShadow: btnHovered
                  ? "0 0 28px -6px rgba(34,211,238,0.18)"
                  : "none",
                color: btnHovered
                  ? "rgba(34,211,238,0.92)"
                  : "rgba(255,255,255,0.7)",
                transform: btnHovered
                  ? "scale(1.015) translateY(-1px)"
                  : "scale(1)",
                cursor: "pointer",
                transition: [
                  "border-color 0.35s ease",
                  "background 0.35s ease",
                  "box-shadow 0.4s ease",
                  "color 0.35s ease",
                  "transform 0.35s ease",
                ].join(", "),
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Send Message
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: btnHovered ? "translateX(2px)" : "translateX(0)",
                  transition: `transform 0.35s ${EASE}`,
                }}
              >
                <path
                  d="M1.5 5.5h8M6.5 2l3 3.5-3 3.5"
                  stroke={
                    btnHovered
                      ? "rgba(34,211,238,0.85)"
                      : "rgba(255,255,255,0.45)"
                  }
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </>
      )}
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function ContactSection({id}) {
  return (
    <>
      <style>{`
        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.2);
          font-style: italic;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: rgba(255,255,255,0.88);
          -webkit-box-shadow: 0 0 0 1000px #0a0a0c inset;
          transition: background-color 5000s ease-in-out 0s;
        }

        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section
        style={{
          width: "100%",
          minHeight: "100svh",
          background: "#0a0a0c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3.5rem,8vh,6rem) clamp(1.5rem,5vw,4.5rem)",
        }}
        id={id}
      >
        {/* Section eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
            marginBottom: "clamp(1.5rem,3.5vh,2.5rem)",
          }}
        >
          <div
            style={{
              width: "1.2rem",
              height: "1px",
              background: "rgba(40,255,255,0.9)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.56rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(40,255,255,0.8)",
            }}
          >
            Contact
          </span>
        </div>

        {/* Two-panel layout */}
        <div
          className="contact-layout"
          style={{
            display: "flex",
            gap: "clamp(0.75rem,1.5vw,1.25rem)",
            alignItems: "stretch",
          }}
        >
          <LeftPanel />
          <RightPanel />
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "clamp(1.25rem,3vh,2rem)",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.54rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,1)",
            }}
          >
            Based in your city, working globally
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.54rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,1)",
            }}
          >
            © 2026
          </span>
        </div>
      </section>
    </>
  );
}
