"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEMS, ItemType, TYPE_LABELS } from "@/lib/data";
import ItemCard from "@/components/ItemCard";
import PillButton from "@/components/PillButton";

const MOODS = [
  { label: "Nostalgic", emoji: "🕯️", vibe: "dark-academia" },
  { label: "Adventurous", emoji: "🌊", vibe: "coastal-summer" },
  { label: "Romantic", emoji: "🥐", vibe: "parisian" },
  { label: "Put-together", emoji: "🎾", vibe: "old-money" },
  { label: "Rebellious", emoji: "💿", vibe: "y2k" },
  { label: "Calm", emoji: "🍵", vibe: "japanese-calm" },
  { label: "Wired", emoji: "🌙", vibe: "late-night" },
  { label: "Wistful", emoji: "🌅", vibe: "golden-hour" },
];

const TYPES: { label: string; type: ItemType | "any" }[] = [
  { label: "A book", type: "book" },
  { label: "Something to watch", type: "movie" },
  { label: "Something to hear", type: "album" },
  { label: "Somewhere to go", type: "place" },
  { label: "Surprise me", type: "any" },
];

export default function AICurator() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState<(typeof MOODS)[number] | null>(null);
  const [type, setType] = useState<ItemType | "any" | null>(null);

  const reset = () => {
    setStep(0);
    setMood(null);
    setType(null);
  };

  const result = (() => {
    if (!mood || !type) return null;
    const pool = ITEMS.filter(
      (i) => i.vibes.includes(mood.vibe) && (type === "any" || i.type === type)
    );
    return pool[0] ?? null;
  })();

  return (
    <section className="relative w-full bg-lavender py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow rounded-full bg-white px-4 py-1.5 border-2 border-ink">
          Ask the curator
        </span>
        <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink">
          Not sure where
          <br />
          <span className="font-serif italic font-normal text-electric">
            to start?
          </span>
        </h2>
        <p className="mt-4 text-ink/60 max-w-md mx-auto">
          Answer two questions and we&apos;ll match you against everything in
          the archive. Rule-based, not magic &mdash; just well organized.
        </p>

        <div className="mt-12 rounded-5xl border-2 border-ink bg-white p-8 md:p-12 min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <p className="eyebrow text-ink/50 mb-6">
                  How do you feel today?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {MOODS.map((m) => (
                    <motion.button
                      key={m.label}
                      whileHover={{ y: -4, scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        setMood(m);
                        setStep(1);
                      }}
                      className="flex flex-col items-center gap-2 rounded-3xl border-2 border-ink px-3 py-4 bg-lavender hover:bg-neon transition-colors duration-200"
                    >
                      <span className="text-2xl">{m.emoji}</span>
                      <span className="font-display font-bold text-xs text-ink">
                        {m.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && mood && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <p className="eyebrow text-ink/50 mb-6">
                  {mood.emoji} Feeling {mood.label.toLowerCase()}. What do you
                  want to discover?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {TYPES.map((t) => (
                    <motion.button
                      key={t.label}
                      whileHover={{ y: -4, scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        setType(t.type);
                        setStep(2);
                      }}
                      className="flex flex-col items-center gap-2 rounded-3xl border-2 border-ink px-3 py-4 bg-lavender hover:bg-bubblegum hover:text-paper transition-colors duration-200"
                    >
                      <span className="font-display font-bold text-xs">
                        {t.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {result ? (
                  <div className="flex flex-col items-center gap-6">
                    <p className="eyebrow text-ink/50">
                      For a {mood?.label.toLowerCase()} mood, chasing{" "}
                      {type === "any" ? "a surprise" : TYPE_LABELS[type as ItemType].toLowerCase()}
                      :
                    </p>
                    <div className="w-48">
                      <ItemCard item={result} compact />
                    </div>
                  </div>
                ) : (
                  <p className="text-ink/60">
                    Nothing matched that exact combination yet &mdash; try a
                    different mood.
                  </p>
                )}
                <div className="mt-8 flex justify-center gap-3">
                  <PillButton variant="ink" onClick={reset}>
                    Try again
                  </PillButton>
                  {mood && (
                    <PillButton variant="electric" href={`/vibe/${mood.vibe}`}>
                      See the full {mood.vibe.replace("-", " ")} guide
                    </PillButton>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
