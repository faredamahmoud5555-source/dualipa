"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Item, TYPE_LABELS } from "@/lib/data";
import SaveButton from "@/components/SaveButton";

export default function ItemCard({
  item,
  compact = false,
  overline,
}: {
  item: Item;
  compact?: boolean;
  overline?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link href={`/graph/${item.id}`} className="block">
        <div
          className={`relative rounded-4xl border-2 border-ink overflow-hidden ${
            compact ? "aspect-[4/3]" : "aspect-[4/5]"
          }`}
          style={{ background: item.gradient }}
        >
          <div className="halftone absolute inset-0 opacity-[0.12] mix-blend-overlay" />
          <div className="relative h-full flex flex-col justify-between p-5">
            <div className="flex items-start justify-between">
              <span className="eyebrow rounded-full bg-paper/85 border-2 border-ink px-3 py-1 text-ink">
                {overline ?? TYPE_LABELS[item.type]}
              </span>
              <span className="text-3xl leading-none">{item.emoji}</span>
            </div>

            <div>
              <h3 className="font-display font-black text-lg md:text-xl text-paper leading-snug drop-shadow-sm">
                {item.title}
              </h3>
              <p className="mt-1 text-xs md:text-sm text-paper/80">
                {item.subtitle}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
        <SaveButton id={item.id} />
      </div>
    </motion.div>
  );
}
