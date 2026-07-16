"use client";

import { motion } from "framer-motion";
import PillButton from "@/components/PillButton";

const NODES = [
  { emoji: "🎬", label: "Movie", x: 18, y: 20 },
  { emoji: "🎵", label: "Album", x: 82, y: 18 },
  { emoji: "📺", label: "Show", x: 12, y: 72 },
  { emoji: "☕", label: "Place", x: 85, y: 75 },
  { emoji: "💬", label: "Quote", x: 50, y: 90 },
];

export default function CultureGraphTeaser() {
  return (
    <section className="relative w-full bg-ink py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow rounded-full glass-dark px-4 py-1.5 text-paper">
            The signature feature
          </span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-5xl leading-[0.95] text-paper">
            The Culture
            <br />
            <span className="font-serif italic font-normal text-neon">
              Graph.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-paper/70 text-base md:text-lg">
            Nothing on PULP. is a dead end. Every book leads to the movie
            with the same atmosphere, the album to read it to, the coffee
            shop that matches the mood. One click in, and you&apos;re never
            just reading &mdash; you&apos;re following a thread.
          </p>
          
 
        </div>

        <div className="relative aspect-square w-full max-w-md mx-auto">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {NODES.map((node, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke="rgba(228,255,61,0.35)"
                strokeWidth="0.6"
                strokeDasharray="2 2"
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full border-2 border-neon bg-ink text-center px-2"
          >
            <span className="text-2xl">📖</span>
            <span className="mt-1 text-[10px] font-display font-bold text-paper leading-tight">
              The Marble Quiet
            </span>
          </motion.div>

          {NODES.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.15 + i * 0.08 },
                scale: { duration: 0.5, delay: 0.15 + i * 0.08 },
                y: { duration: 3.5 + i, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center gap-1 rounded-2xl glass-dark border border-paper/20 px-3 py-2">
                <span className="text-lg">{node.emoji}</span>
                <span className="text-[9px] font-display font-bold text-paper/80">
                  {node.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
