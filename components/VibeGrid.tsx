"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Vibe = {
  slug: string;
  name: string;
  emoji: string;
  gradient: string;
  text: string;
  description: string;
};

export default function VibeGrid({ vibes }: { vibes: Vibe[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {vibes.map((vibe, i) => (
        <motion.div
          key={vibe.slug}
          initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -3 : 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
        >
          <Link href={`/vibe/${vibe.slug}`}>
            <motion.div
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 2 : -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative aspect-square rounded-4xl border-2 border-ink overflow-hidden shadow-pop"
              style={{ background: vibe.gradient }}
            >
              <div className="halftone absolute inset-0 opacity-10 mix-blend-overlay" />
              <div className="relative h-full flex flex-col justify-between p-5">
                <span className="text-3xl md:text-4xl">{vibe.emoji}</span>
                <h3
                  className={`font-display font-black text-lg md:text-xl leading-tight ${vibe.text}`}
                >
                  {vibe.name}
                </h3>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
