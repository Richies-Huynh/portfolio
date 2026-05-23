"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const songs = [
  {
    rank: "01",
    title: "The Art of Scale",
    album: "Infrastructure Vol. I",
    plays: "3.2M",
    duration: "4:47",
    colorA: "#6B21A8",
    colorB: "#1E0936",
  },
  {
    rank: "02",
    title: "Midnight Deploy",
    album: "Late Night Sessions",
    plays: "2.1M",
    duration: "3:52",
    colorA: "#BE123C",
    colorB: "#3B0015",
  },
  {
    rank: "03",
    title: "Zero Downtime",
    album: "Prod Ready",
    plays: "1.8M",
    duration: "5:03",
    colorA: "#0284C7",
    colorB: "#0C1A3B",
  },
  {
    rank: "04",
    title: "Backend Sonata",
    album: "System Design",
    plays: "1.2M",
    duration: "4:15",
    colorA: "#D97706",
    colorB: "#3B1A00",
  },
  {
    rank: "05",
    title: "Full Stack Flow",
    album: "End to End",
    plays: "987K",
    duration: "3:38",
    colorA: "#15803D",
    colorB: "#0A2E1A",
  },
];

function AlbumArt({
  colorA,
  colorB,
}: {
  colorA: string;
  colorB: string;
}) {
  return (
    <div
      className="relative flex-shrink-0 rounded-[3px] overflow-hidden"
      style={{
        width: 52,
        height: 52,
        background: `linear-gradient(140deg, ${colorA}, ${colorB})`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full border"
          style={{
            width: 32,
            height: 32,
            borderColor: "rgba(255,255,255,0.18)",
          }}
        />
        <div
          className="absolute rounded-full border"
          style={{
            width: 16,
            height: 16,
            borderColor: "rgba(255,255,255,0.18)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 5,
            height: 5,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export default function TopSongs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-8 md:px-16 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between pb-6 mb-2"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div>
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "var(--muted)" }}
          >
            02 — Chart
          </p>
          <h2
            className="font-display leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#ffffff",
            }}
          >
            TOP TRACKS
          </h2>
        </div>
        <span
          className="font-sans text-xs uppercase tracking-widest hidden sm:block"
          style={{ color: "var(--muted)" }}
        >
          All time
        </span>
      </motion.div>

      {/* Tracks */}
      <div className="flex flex-col">
        {songs.map((song, i) => (
          <motion.div
            key={song.rank}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.1 + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="group flex items-center gap-5 py-4 -mx-3 px-3 rounded-lg transition-colors"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Rank */}
              <span
                className="font-display text-2xl w-8 flex-shrink-0 transition-colors duration-200"
                style={{ color: "var(--muted)" }}
              >
                {song.rank}
              </span>

              {/* Album art */}
              <div className="relative flex-shrink-0">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <AlbumArt colorA={song.colorA} colorB={song.colorB} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white text-xs drop-shadow-lg">▶</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-sans font-medium text-sm truncate transition-colors duration-200 group-hover:text-[color:var(--accent)]"
                  style={{ color: "#ffffff" }}
                >
                  {song.title}
                </p>
                <p
                  className="font-sans text-xs truncate mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {song.album}
                </p>
              </div>

              {/* Plays */}
              <span
                className="font-sans text-sm flex-shrink-0 hidden sm:block tabular-nums"
                style={{ color: "var(--muted)" }}
              >
                {song.plays}
              </span>

              {/* Duration */}
              <span
                className="font-sans text-sm flex-shrink-0 tabular-nums"
                style={{ color: "var(--muted)" }}
              >
                {song.duration}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
