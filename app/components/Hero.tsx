"use client";
import { motion } from "framer-motion";

const BAR_CONFIGS = Array.from({ length: 36 }, (_, i) => ({
  duration: 0.6 + ((i * 0.137) % 1.0),
  delay: (i * 0.083) % 1.0,
}));

function EqualizerBars() {
  return (
    <div className="flex items-end gap-[3px]" style={{ height: "80px" }}>
      {BAR_CONFIGS.map((cfg, i) => (
        <div
          key={i}
          className="flex-1 rounded-full origin-bottom"
          style={{
            backgroundColor: "var(--accent)",
            height: "100%",
            animation: `eq-bar ${cfg.duration}s ease-in-out infinite`,
            animationDelay: `${cfg.delay}s`,
            opacity: 0.7 + (i % 3) * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-8 md:px-16 pt-8 pb-36 overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,255,0,0.06) 0%, transparent 65%)",
          animation: "orb-float 14s ease-in-out infinite",
        }}
      />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-between z-10"
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: "var(--accent)",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Now Playing
          </span>
        </div>
        <span
          className="font-sans text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          Portfolio — 2025
        </span>
      </motion.div>

      {/* Main headline */}
      <div className="relative z-10 flex flex-col">
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none"
            style={{ fontSize: "clamp(5rem, 17vw, 18rem)", color: "#ffffff" }}
          >
            RICHIES
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none"
            style={{
              fontSize: "clamp(5rem, 17vw, 18rem)",
              color: "var(--accent)",
            }}
          >
            HUYNH.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-sans text-sm tracking-[0.28em] uppercase mt-6"
          style={{ color: "var(--muted)" }}
        >
          Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Backend Systems&nbsp;&nbsp;·&nbsp;&nbsp;Full Stack
        </motion.p>
      </div>

      {/* Equalizer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="relative z-10"
      >
        <EqualizerBars />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="font-sans text-xs tracking-[0.3em] uppercase mt-4"
          style={{ color: "var(--muted)" }}
        >
          Scroll to explore ↓
        </motion.p>
      </motion.div>
    </section>
  );
}
