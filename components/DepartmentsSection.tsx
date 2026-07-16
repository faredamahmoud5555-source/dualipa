"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";

const DEPARTMENTS = [
  {
    icon: "👗",
    title: "Style",
    description: "The trends worth stealing and the ones worth skipping.",
    gradient: "linear-gradient(155deg, #ECE7FD 0%, #D8CFFB 100%)",
    className: "md:col-span-2 md:row-span-2",
    glow: "glow" as const,
  },
  {
    icon: "🎧",
    title: "Sound",
    description: "What's on repeat this week, no skips.",
    gradient: "linear-gradient(155deg, #FF4FA0 0%, #FFB4D9 100%)",
    textClass: "text-paper",
    glow: "glow-pink" as const,
  },
  {
    icon: "🎬",
    title: "Screen",
    description: "The show everyone's texting about at 1am.",
    gradient: "linear-gradient(155deg, #4F6BFF 0%, #8FA3FF 100%)",
    textClass: "text-paper",
    glow: "glow" as const,
  },
  {
    icon: "🌐",
    title: "Internet",
    description: "Chronically online, unapologetically.",
    gradient: "linear-gradient(155deg, #E4FF3D 0%, #F2FFB0 100%)",
    glow: "glow" as const,
    className: "md:col-span-2",
  },
  {
    icon: "🪩",
    title: "Nightlife",
    description: "Where to be seen, and where not to be.",
    gradient: "linear-gradient(155deg, #15112A 0%, #322A5C 100%)",
    textClass: "text-paper",
    glow: "glow-pink" as const,
  },
  {
    icon: "💬",
    title: "Voices",
    description: "Guest columns from people worth listening to.",
    gradient: "linear-gradient(155deg, #FFFDF9 0%, #ECE7FD 100%)",
    glow: "glow" as const,
  },
];

export default function DepartmentsSection() {
  return (
    <section id="departments" className="relative w-full bg-paper py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="eyebrow rounded-full bg-lavender px-4 py-1.5 border-2 border-ink">
              What&apos;s inside
            </span>
            <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink">
              Six departments.
              <br />
              <span className="font-serif italic font-normal text-bubblegum">
                Zero filler.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-ink/60 text-sm md:text-base">
            Every issue is built the same way: fast, opinionated, and made
            for reading between meetings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[220px]">
          {DEPARTMENTS.map((dept) => (
            <FeatureCard key={dept.title} {...dept} />
          ))}
        </div>
      </div>
    </section>
  );
}
