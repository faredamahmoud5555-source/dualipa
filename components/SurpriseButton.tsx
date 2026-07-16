"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEMS, TYPE_LABELS } from "@/lib/data";
import ItemCard from "@/components/ItemCard";

export default function SurpriseButton() {
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState(ITEMS[0]);

  const reroll = () => {
    const next = ITEMS[Math.floor(Math.random() * ITEMS.length)];
    setPick(next);
  };

  useEffect(() => {
    if (!open) return;
    reroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, rotate: -4 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        className="fixed bottom-6 right-6 z-[250] flex items-center gap-2 rounded-full border-2 border-ink bg-neon px-5 py-3 font-display font-black text-sm text-ink shadow-pop"
      >
        🎲 Surprise me
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Random discovery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-ink/70 backdrop-blur-sm px-6"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative w-full max-w-sm rounded-5xl border-2 border-ink bg-white p-6"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-paper text-sm"
              >
                ✕
              </button>

              <p className="eyebrow text-ink/50 mb-4">
                Today&apos;s hidden gem &mdash; {TYPE_LABELS[pick.type]}
              </p>

              <ItemCard item={pick} />

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={reroll}
                className="mt-4 w-full rounded-full border-2 border-ink bg-electric py-3 font-display font-bold text-sm text-white"
              >
                Roll again
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
