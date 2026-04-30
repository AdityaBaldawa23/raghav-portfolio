"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#0a0a0a] md:px-10 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Ambient glow background — refined */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-100 h-100 bg-cyan-400/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-yellow-400/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-cyan-400/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <p className="flex items-center gap-3 text-[9px] tracking-[0.35em] text-white uppercase mb-5 font-light">
            <span className="w-6 h-px bg-[#28deff]" />
            Journey
            <span className="w-6 h-px bg-[#28deff]" />
          </p>

          <h2
            className="text-3xl md:text-6xl font-light text-white max-w-4xl leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Changelog from <br className="hidden md:block" />
            my{" "}
            <em
              className="not-italic relative inline-block"
              style={{
                color: "#00e5ff",
                textShadow: "0 0 40px rgba(0,229,255,0.3)",
              }}
            >
              journey
            </em>
          </h2>

          <p className="text-white/35 text-sm md:text-base max-w-sm mt-5 leading-relaxed font-light tracking-wide">
            Evolving craft over time — refining design, exploring ideas, and
            building work that feels intentional.
          </p>

          {/* Accent divider */}
          <div className="mt-8 flex items-center gap-2">
            <div className="w-10 h-px bg-cyan-400/80" />
            <div className="w-2 h-px bg-yellow-400/60" />
            <div className="w-1 h-px bg-white/20" />
          </div>
        </div>

        {/* Timeline entries */}
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="group flex justify-start pt-10 md:pt-40 md:gap-10 transition-all duration-500"
            >
              {/* Left sticky column: dot + year */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* Node dot */}
                <div className="relative h-10 left-3 md:left-3 w-10 flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
                      boxShadow: "0 0 16px 4px rgba(0,229,255,0.08)",
                    }}
                  />

                  {/* Ring border */}
                  <div
                    className="absolute inset-0.75 rounded-full border transition-all duration-500"
                    style={{
                      borderColor: "rgba(0,229,255,0.3)",
                      boxShadow:
                        "0 0 8px rgba(0,229,255,0.1), inset 0 0 4px rgba(0,229,255,0.05)",
                    }}
                  />

                  {/* Inner dot */}
                  <div
                    className="relative z-10 h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-125"
                    style={{
                      background: "linear-gradient(135deg, #00e5ff, #ffff00)",
                      boxShadow: "0 0 8px rgba(0,229,255,0.6)",
                    }}
                  />
                </div>

                {/* Year / title — desktop */}
                <h3
                  className="hidden md:block md:pl-20 text-xl md:text-5xl font-light tracking-tight transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "rgba(255,255,255,0.15)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="group-hover:text-white/30 transition-colors duration-500">
                    {item.title}
                  </span>
                </h3>
              </div>

              {/* Right content column */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                {/* Mobile title */}
                <h3
                  className="md:hidden block text-2xl mb-4 text-left font-light"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  {item.title}
                </h3>

                {/* Subtle top rule on each card */}
                <div className="absolute top-0 left-4 right-0 h-px bg-linear-to-r from-white/5 via-white/0 to-transparent hidden md:block" />

                {/* Content */}
                <div className="text-white/60 text-sm leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline track */}
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-visible w-0.5"
          >
            {/* Base track */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

            {/* Scroll-driven fill — cyan → yellow */}
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-0.5 rounded-full"
              // inline style for the gradient + glow since Tailwind can't do arbitrary gradients with glow
              // We use a wrapper trick: the line + a blurred sibling
            >
              {/* The line itself */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, #00e5ff 0%, #28deff 40%, #ffff00 100%)",
                }}
              />
              {/* Glow layer */}
              <div
                className="absolute inset-0 rounded-full blur-[3px]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,229,255,0.5) 0%, rgba(255,255,0,0.3) 100%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
