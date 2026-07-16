"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CITIES, itemsByCity, groupByType, TYPE_LABELS } from "@/lib/data";
import ItemCard from "@/components/ItemCard";

export default function WorldMap() {
  const [active, setActive] = useState(CITIES[0].slug);
  const city = CITIES.find((c) => c.slug === active)!;
  const items = itemsByCity(active);
  const groups = groupByType(items);

  return (
    <div>
      <div
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-4xl border-2 border-ink overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #ECE7FD 0%, #D8CFFB 55%, #4F6BFF 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(rgba(21,17,42,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />

        {CITIES.map((c) => (
          <motion.button
            key={c.slug}
            type="button"
            onClick={() => setActive(c.slug)}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={
                active === c.slug
                  ? { scale: [1, 1.3, 1] }
                  : { scale: 1 }
              }
              transition={{
                duration: 1.6,
                repeat: active === c.slug ? Infinity : 0,
                ease: "easeInOut",
              }}
              className={`block h-4 w-4 rounded-full border-2 border-ink ${
                active === c.slug ? "bg-bubblegum" : "bg-paper"
              }`}
            />
            <span
              className={`eyebrow rounded-full px-2 py-0.5 border-2 border-ink whitespace-nowrap transition-colors ${
                active === c.slug
                  ? "bg-bubblegum text-paper"
                  : "bg-paper/90 text-ink opacity-0 group-hover:opacity-100"
              }`}
            >
              {c.name}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <h3 className="font-display font-black text-3xl md:text-4xl text-ink mb-8">
            {city.name}
          </h3>

          {groups.length === 0 ? (
            <p className="text-ink/60">
              We&apos;re still scouting {city.name}. Check back soon.
            </p>
          ) : (
            <div className="space-y-10">
              {groups.map((group) => (
                <div key={group.type}>
                  <p className="eyebrow text-ink/50 mb-4">
                    {TYPE_LABELS[group.type]}s
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {group.items.map((item) => (
                      <ItemCard key={item.id} item={item} compact />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
