"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    label: "Email",
    display: "richies@entbox.ai",
    href: "mailto:richies@entbox.ai",
  },
  {
    label: "GitHub",
    display: "Richies-Huynh",
    href: "https://github.com/Richies-Huynh",
  },
  {
    label: "LinkedIn",
    display: "Connect →",
    href: "https://linkedin.com/in/richies-huynh",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-16 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-sans text-xs tracking-[0.3em] uppercase mb-6"
        style={{ color: "var(--muted)" }}
      >
        03 — Connect
      </motion.p>

      <div style={{ overflow: "hidden" }}>
        <motion.h2
          initial={{ y: "105%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-none mb-16"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            color: "#ffffff",
          }}
        >
          SEND A SIGNAL.
        </motion.h2>
      </div>

      <div className="flex flex-col">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            className="group flex items-center justify-between py-5 transition-colors duration-200"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span
              className="font-sans text-xs uppercase tracking-widest transition-colors duration-200 group-hover:text-[color:var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </span>
            <span
              className="font-sans text-sm transition-colors duration-200 group-hover:text-[color:var(--accent)]"
              style={{ color: "#ffffff" }}
            >
              {link.display}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
