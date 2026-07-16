"use client";

import { motion } from "framer-motion";
import { Item, groupGraphByVerb, ItemType } from "@/lib/data";
import ItemCard from "@/components/ItemCard";

export default function CultureGraph({
  graph,
}: {
  graph: { type: ItemType; label: string; item: Item }[];
}) {
  const buckets = groupGraphByVerb(graph);

  if (buckets.length === 0) {
    return (
      <p className="text-ink/60 text-sm">
        This one hasn&apos;t been connected to anything else yet.
      </p>
    );
  }

  return (
    <div className="space-y-16">
      {buckets.map((bucket, bi) => (
        <motion.div
          key={bucket.verb}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: bi * 0.05 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{bucket.emoji}</span>
            <h3 className="font-display font-black text-2xl md:text-3xl text-ink">
              {bucket.verb}
            </h3>
            <span className="h-px flex-1 bg-ink/15" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {bucket.entries.map(({ label, item }) => (
              <ItemCard key={item.id} item={item} overline={label} compact />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
