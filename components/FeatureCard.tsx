"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const GLOW_CLASS: Record<string, string> = {
  glow: "shadow-glow",
  "glow-pink": "shadow-glow-pink",
};

export default function FeatureCard({
  icon,
  title,
  description,
  gradient,
  textClass = "text-ink",
  className = "",
  glow = "glow",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  textClass?: string;
  className?: string;
  glow?: "glow" | "glow-pink";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-4xl p-[3px] ${GLOW_CLASS[glow]} hover:shadow-lg ${className}`}
    >
      <div className="absolute inset-0 rounded-4xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute -inset-[50%] animate-conic"
          style={{
            background:
              "conic-gradient(from 0deg, #4F6BFF, #FF4FA0, #E4FF3D, #4F6BFF)",
          }}
        />
      </div>

      <div
        className="relative h-full rounded-[calc(2.5rem-3px)] border-2 border-ink p-7 md:p-8 flex flex-col justify-between overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="halftone absolute inset-0 opacity-[0.08]" />

        <div className="relative flex items-center justify-between">
          <span className="text-4xl md:text-5xl">{icon}</span>
          <span className="eyebrow rounded-full bg-paper/70 border-2 border-ink px-3 py-1 group-hover:bg-neon transition-colors duration-300">
            Dept.
          </span>
        </div>

        <div className="relative mt-10">
          <h3 className={`font-display font-black text-2xl md:text-3xl ${textClass}`}>
            {title}
          </h3>
          <p className={`mt-2 text-sm md:text-base ${textClass} opacity-75`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
