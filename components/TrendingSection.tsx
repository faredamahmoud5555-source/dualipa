"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trendingItems } from "@/lib/data";
import ItemCard from "@/components/ItemCard";

export default function TrendingSection() {
  const items = trendingItems(8);

  return (
    <section className="relative w-full bg-lavender py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="eyebrow rounded-full bg-neon px-4 py-1.5 border-2 border-ink">
              🔥 Right now
            </span>
            <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink">
              What&apos;s trending
            </h2>
          </div>
          <Link
            href="/vibe"
            className="eyebrow text-ink/60 hover:text-ink transition-colors"
          >
            See it all by vibe →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
