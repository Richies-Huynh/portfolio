"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MINI_BAR_CONFIGS = Array.from({ length: 4 }, (_, i) => ({
  duration: 0.5 + i * 0.15,
  delay: i * 0.12,
}));

export default function NowPlayingBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: mounted ? 0 : "100%" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8, 8, 8, 0.88)",
        backdropFilter: "blur(24px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-5">
        {/* Spinning album art */}
        <div
          className="flex-shrink-0 rounded-[3px] overflow-hidden"
          style={{
            width: 40,
            height: 40,
            background: "linear-gradient(140deg, #d4ff00, #1a1a1a)",
            animation: "spin-record 10s linear infinite",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="rounded-full border"
              style={{
                width: 24,
                height: 24,
                borderColor: "rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>

        {/* Track info + progress */}
        <div className="flex flex-col flex-1 min-w-0 gap-1.5">
          <div className="flex items-center gap-3 min-w-0">
            {/* Mini equalizer */}
            <div className="flex items-end gap-[2px] flex-shrink-0" style={{ height: 14 }}>
              {MINI_BAR_CONFIGS.map((cfg, i) => (
                <div
                  key={i}
                  className="rounded-full origin-bottom"
                  style={{
                    width: 2,
                    height: "100%",
                    backgroundColor: "var(--accent)",
                    animation: `eq-bar ${cfg.duration}s ease-in-out infinite`,
                    animationDelay: `${cfg.delay}s`,
                  }}
                />
              ))}
            </div>

            <span
              className="font-sans font-medium text-xs text-white truncate"
            >
              RICHIES HUYNH
            </span>
            <span
              className="font-sans text-xs truncate hidden sm:block"
              style={{ color: "var(--muted)" }}
            >
              · Software Engineer
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="rounded-full overflow-hidden"
            style={{ height: 2, backgroundColor: "var(--border)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                animation: "progress-loop 28s linear infinite",
              }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            className="font-sans text-sm transition-colors duration-150 hover:text-white"
            style={{ color: "var(--muted)" }}
            aria-label="Previous"
          >
            ⏮
          </button>
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#ffffff",
            }}
          >
            <span className="text-black text-xs" style={{ marginLeft: 1 }}>
              ▶
            </span>
          </div>
          <button
            className="font-sans text-sm transition-colors duration-150 hover:text-white"
            style={{ color: "var(--muted)" }}
            aria-label="Next"
          >
            ⏭
          </button>
        </div>
      </div>
    </motion.div>
  );
}
