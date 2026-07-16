"use client";

import { motion } from "framer-motion";
import { VIBES } from "@/lib/data";
import VibeGrid from "@/components/VibeGrid";
import PillButton from "@/components/PillButton";

export default function VibeTeaserSection() {
  return (
    <section className="relative w-full bg-paper py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="eyebrow rounded-full bg-lavender px-4 py-1.5 border-2 border-ink">
            Discover the vibe
          </span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink max-w-xl">
            Skip the category.
            <br />
            <span className="font-serif italic font-normal text-electric">
              Pick a feeling.
            </span>
          </h2>
        </motion.div>

        <VibeGrid vibes={VIBES.slice(0, 8)} />

        <div className="mt-10 flex justify-center">
          <PillButton variant="bubblegum" href="/vibe" icon="→">
            Explore every vibe
          </PillButton>
        </div>
      </div>
    </section>
  );
}
