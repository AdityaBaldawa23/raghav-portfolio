"use client";

import { useEffect } from "react";

export default function KokumiBrandPage() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        :root {
          --amber:    #AA6C36;
          --espresso: #5F3216;
          --white:    #FFFFFF;
          --ebony:    #241D16;
          --peach:    #F3BE95;
          --cream:    #F5EDE0;
          --cream2:   #E8D9C4;
          --bar:      #C4956A;
          --qs:  'Quicksand', sans-serif;
          --rec: 'Recoleta', Georgia, serif;
        }

        @font-face {
          font-family: 'Recoleta';
          src: url('/fonts/Recoleta-Regular.woff2') format('woff2');
          font-weight: 400; font-style: normal; font-display: swap;
        }
        @font-face {
          font-family: 'Recoleta';
          src: url('/fonts/Recoleta-Bold.woff2') format('woff2');
          font-weight: 700; font-style: normal; font-display: swap;
        }

        body { background: var(--cream); font-family: var(--qs); overflow-x: hidden; }

        .fade-up {
          opacity: 0; transform: translateY(20px);
          transition: opacity .55s ease, transform .55s ease;
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        /* HERO */
        .hero {
          position: relative; width: 100%; height: 620px;
          overflow: hidden; display: flex;
          align-items: center; justify-content: center;
        }
        .hero-bg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center; z-index: 0;
          filter: brightness(1.1) contrast(0.88);
        }
        .hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: rgba(245,237,224,0.38);
        }
        .hero-content {
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; width: 100%;
        }
        .hero-logo { width: 460px; height: 460px; object-fit: contain; }

        .bar { width: 100%; height: 6px; background: var(--bar); }
        .divider { width: 100%; height: 2px; background: var(--bar); opacity: 0.55; }

        .sec-label {
          font-family: var(--qs); font-size: 11px; letter-spacing: 0.42em;
          text-transform: uppercase; font-weight: 700;
          color: var(--espresso); text-align: center;
        }

        /* LOGO SECTION */
        .logo-section {
          width: 100%; display: grid;
          grid-template-columns: 1fr 1fr; background: var(--cream);
        }
        .logo-cell {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 56px 48px; text-align: center;
        }
        .logo-cell-left { border-right: 2px solid var(--bar); }
        @media (max-width: 600px) {
          .logo-section { grid-template-columns: 1fr; }
          .logo-cell-left { border-right: none; border-bottom: 1px solid var(--bar); }
        }
        .logo-cell .sec-label { margin-bottom: 32px; }
        .primary-logo-img { width: 250px; height: 250px; object-fit: cover; }
        .logo-name {
          font-family: var(--rec); font-size: 2rem; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--espresso); margin-top: 14px;
        }
        .submark-row { display: flex; gap: 40px; align-items: center; justify-content: center; }
        .submark-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .submark-logo-img { width: 250px; height: 250px; object-fit: cover; }

        /* COLOUR PALETTE */
        .palette-section {
          width: 100%; background: var(--cream); padding: 52px 48px;
          display: flex; flex-direction: column; align-items: center; gap: 40px;
        }
        .palette-row {
          display: flex; flex-wrap: wrap; gap: 40px;
          justify-content: center; align-items: flex-start; width: 100%;
        }
        .swatch { display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .swatch-circle {
          width: 112px; height: 112px; border-radius: 50%;
          box-shadow: 0 3px 14px rgba(0,0,0,0.10);
        }
        .swatch-white-border { border: 1.5px solid var(--cream2); }
        .swatch-texts { text-align: center; }
        .swatch-name {
          font-family: var(--qs); font-size: 11px; font-weight: 700;
          letter-spacing: 0.24em; text-transform: uppercase; color: var(--espresso);
        }
        .swatch-hex {
          font-family: var(--qs); font-size: 10px; font-weight: 600;
          color: var(--amber); margin-top: 3px;
        }
        .swatch-rgb {
          font-family: var(--qs); font-size: 9px;
          color: var(--espresso); opacity: 0.5; margin-top: 2px;
        }

        /* TYPOGRAPHY */
        .typo-section { width: 100%; background: var(--cream); padding: 52px 64px; }
        .typo-section .sec-label { text-align: center; margin-bottom: 44px; }
        .typo-row {
          display: flex; flex-wrap: wrap; gap: 20px;
          justify-content: flex-start; margin-bottom: 48px;
        }
        .typo-spec { text-align: left; }
        .typo-aa { font-size: 60px; line-height: 1; color: var(--espresso); }
        .typo-aa-rec    { font-family: var(--rec); font-weight: 400; }
        .typo-aa-qs     { font-family: var(--qs);  font-weight: 400; }
        .typo-aa-casual { font-family: cursive; font-weight: 700; }
        .typo-font-lbl {
          font-family: var(--qs); font-size: 10px; letter-spacing: 0.26em;
          text-transform: uppercase; color: var(--espresso); opacity: 0.7;
          font-weight: 500; margin-top: 10px;
        }
        .typo-demo { width: 100%; }
        .demo-h1 {
          font-family: var(--rec); font-size: clamp(2rem, 4.5vw, 3.2rem);
          color: var(--ebony); font-weight: 400;
        }
        .demo-h2 {
          font-family: var(--qs); font-size: 11px; letter-spacing: 0.32em;
          text-transform: uppercase; color: var(--amber);
          font-weight: 700; margin-top: 12px;
        }
        .demo-body {
          font-family: var(--qs); font-size: 13px; color: var(--ebony);
          line-height: 1.85; margin-top: 18px; max-width: 680px;
        }

        /* ═══════════════════════════════════════════════════════
           MOCKUP GRID — matches Canva layout exactly
           
           Col widths (matching Canva visual proportions):
             Col 1 (biz cards):  ~1.55fr  — widest single column
             Col 2 (menu):       ~1.3fr
             Col 3 (indian):     ~1.3fr
             Col 4 (warm/poster):~0.85fr  — narrowest

           Row structure:
             Row 1: biz-front | menu (rowspan 2) | indian (rowspan 2) | warm-moment
             Row 2: biz-back  |                  |                    | kokumi-poster
        ═══════════════════════════════════════════════════════ */
        .mockup-section {
          width: 100%;
          background: var(--cream);
          padding: 52px 48px 64px;
        }
        .mockup-section .sec-label {
          text-align: center;
          margin-bottom: 28px;
          font-size: 12px;
          letter-spacing: 0.5em;
        }

        .mockup-grid {
          display: grid;
          /* Col1 widest, Col2+3 medium, Col4 narrowest */
          grid-template-columns: 1.55fr 1.3fr 1.3fr 0.85fr;
          grid-template-rows: auto auto;
          gap: 14px;
          align-items: stretch;
        }

        /* Business Card Front — Col 1, Row 1 */
        .m-biz-front {
          grid-column: 1;
          grid-row: 1;
        }

        /* Business Card Back — Col 1, Row 2 */
        .m-biz-back {
          grid-column: 1;
          grid-row: 2;
        }

        /* Full Menu — Col 2, spans Row 1+2 */
        .m-menu {
          grid-column: 2;
          grid-row: 1 / 3;
        }

        /* Indian/Drinks Menu — Col 3, spans Row 1+2 */
        .m-indian {
          grid-column: 3;
          grid-row: 1 / 3;
        }

        /* A Warm Moment — Col 4, Row 1 */
        .m-warm {
          grid-column: 4;
          grid-row: 1;
        }

        /* Kokumi Poster / Japanese card — Col 4, Row 2 */
        .m-japanese {
          grid-column: 4;
          grid-row: 2;
        }

        /* All images: fill their cell, NO border radius */
        .mock-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;           /* ← NO border radius */
          display: block;
          box-shadow: 0 3px 14px rgba(36,29,22,0.13);
        }

        /* Tall span cells — let image grow naturally */
        .m-menu,
        .m-indian {
          display: flex;
          flex-direction: column;
        }
        .m-menu .mock-img,
        .m-indian .mock-img {
          flex: 1;
          object-position: top;
        }

        /* Mobile: stack into 2 cols then 1 col */
        @media (max-width: 900px) {
          .mockup-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: none;
          }
          .m-biz-front, .m-biz-back,
          .m-menu, .m-indian,
          .m-warm, .m-japanese {
            grid-column: auto;
            grid-row: auto;
          }
          .m-menu .mock-img,
          .m-indian .mock-img {
            height: 360px;
          }
        }
        @media (max-width: 560px) {
          .mockup-grid { grid-template-columns: 1fr; }
        }

        /* FOOTER */
        .footer {
          background: var(--ebony); padding: 64px 56px;
          text-align: center; display: flex;
          flex-direction: column; align-items: center; gap: 10px;
        }
        .footer-logo {
          width: 48px; height: 48px; object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .footer-name {
          font-family: var(--rec); font-size: 1.4rem;
          letter-spacing: 0.34em; text-transform: uppercase; color: var(--white);
          margin-top: 4px;
        }
        .footer-tag {
          font-family: var(--qs); font-size: 10px; letter-spacing: 0.38em;
          text-transform: uppercase; color: var(--peach); font-weight: 600;
        }
        .footer-dots { display: flex; gap: 7px; margin-top: 16px; }
        .footer-dot  { width: 6px; height: 6px; border-radius: 50%; }
        .footer-copy {
          font-family: var(--qs); font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--peach);
          opacity: 0.4; margin-top: 14px;
        }
      `}</style>

      <main>
        {/* HERO */}
        <section className="hero">
          <img className="hero-bg" src="/Images/Brand_Kit_BG.png" alt="" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <img className="hero-logo" src="/Images/logo.png" alt="Kokumi" />
          </div>
        </section>

        <div className="bar" />

        {/* LOGO */}
        <div className="logo-section fade-up">
          <div className="logo-cell logo-cell-left">
            <p className="sec-label">Logo</p>
            <img className="primary-logo-img" src="/Images/logo.png" alt="Kokumi Logo" />
          </div>
          <div className="logo-cell">
            <p className="sec-label">Logo Submark</p>
            <div className="submark-row">
              <div className="submark-item">
                <img className="submark-logo-img" src="/Images/logoblack.png" alt="Kokumi dark submark" />
              </div>
              <div className="submark-item">
                <img className="submark-logo-img" src="/Images/logowhite.png" alt="Kokumi light submark" />
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* COLOUR PALETTE */}
        <div className="palette-section fade-up">
          <p className="sec-label">Colour Palette</p>
          <div className="palette-row">
            {[
              { name: "Amber Wood",     hex: "#AA6C36", rgb: "RGB (170, 108, 54)" },
              { name: "Espresso Brown", hex: "#5F3216", rgb: "RGB (95, 50, 22)" },
              { name: "Pure White",     hex: "#FFFFFF", rgb: "RGB (255, 255, 255)", border: true },
              { name: "Smoked Ebony",   hex: "#241D16", rgb: "RGB (36, 29, 22)" },
              { name: "Peach Sand",     hex: "#F3BE95", rgb: "RGB (243, 190, 149)" },
            ].map((s) => (
              <div className="swatch" key={s.hex}>
                <div
                  className={`swatch-circle${s.border ? " swatch-white-border" : ""}`}
                  style={{ background: s.hex }}
                />
                <div className="swatch-texts">
                  <p className="swatch-name">{s.name}</p>
                  <p className="swatch-hex">{s.hex}</p>
                  <p className="swatch-rgb">{s.rgb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* TYPOGRAPHY */}
        <div className="typo-section fade-up">
          <p className="sec-label">Typography</p>
          <div className="typo-row">
            <div className="typo-spec">
              <p className="typo-aa typo-aa-rec">Aa</p>
              <p className="typo-font-lbl">Recoleta</p>
            </div>
            <div className="typo-spec">
              <p className="typo-aa typo-aa-qs">Aa</p>
              <p className="typo-font-lbl">Quicksand</p>
            </div>
            <div className="typo-spec">
              <p className="typo-aa typo-aa-casual">Aa</p>
              <p className="typo-font-lbl">Handy Casual</p>
            </div>
          </div>
          <div className="typo-demo">
            <h2 className="demo-h1">Your heading here</h2>
            <p className="demo-h2">Your Subheading Here</p>
            <p className="demo-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitia ac. Duis
              venenatis ipsum vel libero pulvinar faucibus. Convallis et ligula
              sit amet vestibulum. Aenean ac augue imperdietaca, pharetra metus
              eu, elementum neque.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* ══════════════════════════════════════
            BRAND MOCKUPS — exact Canva layout
            Col1(wide): biz-front top, biz-back bottom
            Col2: full menu (rowspan 2)
            Col3: indian/drinks menu (rowspan 2)
            Col4(narrow): warm-moment top, kokumi-poster bottom
        ══════════════════════════════════════ */}
        <div className="mockup-section fade-up">
          <p className="sec-label" style={{ letterSpacing: "0.5em" }}>Kokumi</p>

          <div className="mockup-grid">

            {/* Col 1, Row 1 — Business Card Front */}
            <div className="m-biz-front">
              <img className="mock-img" src="/Images/BusinessCardFront.png" alt="Business Card Front" />
            </div>

            {/* Col 2, Rows 1+2 — Full Menu */}
            <div className="m-menu">
              <img className="mock-img" src="/Images/MenuFront.png" alt="Kokumi Menu" />
            </div>

            {/* Col 3, Rows 1+2 — Indian / Drinks Menu */}
            <div className="m-indian">
              <img className="mock-img" src="/Images/MenuBack.png" alt="Indian and Drinks Menu" />
            </div>

            {/* Col 4, Row 1 — A Warm Moment */}
            <div className="m-warm">
              <img className="mock-img" src="/Images/KokumiStandee.png" alt="A Warm Moment" />
            </div>

            {/* Col 1, Row 2 — Business Card Back */}
            <div className="m-biz-back">
              <img className="mock-img" src="/Images/BusinessCardBack.png" alt="Business Card Back" />
            </div>

            {/* Col 4, Row 2 — Kokumi Poster */}
            <div className="m-japanese">
              <img className="mock-img" src="/Images/InstagramPost.png" alt="Kokumi Instagram Post" />
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <img className="footer-logo" src="/Images/logo.png" alt="Kokumi" />
          <p className="footer-name">KOKUMI</p>
          <p className="footer-tag">Warm Bowls. Bold Flavours.</p>
          <div className="footer-dots">
            <div className="footer-dot" style={{ background: "#AA6C36" }} />
            <div className="footer-dot" style={{ background: "#F3BE95" }} />
            <div className="footer-dot" style={{ background: "#AA6C36" }} />
          </div>
          <p className="footer-copy">© 2024 Kokumi. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}