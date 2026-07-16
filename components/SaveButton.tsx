"use client";

import { motion } from "framer-motion";
import { useCollection } from "@/lib/useCollection";

export default function SaveButton({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const { isSaved, toggle } = useCollection();
  const saved = isSaved(id);

  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      aria-pressed={saved}
      aria-label={saved ? "Remove from your collection" : "Save to your collection"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink transition-colors duration-200 ${
        saved ? "bg-neon text-ink" : "bg-paper/80 text-ink/70 hover:bg-paper"
      } ${className}`}
    >
      <motion.span
        animate={saved ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        {saved ? "♥" : "♡"}
      </motion.span>
    </motion.button>
  );
}
