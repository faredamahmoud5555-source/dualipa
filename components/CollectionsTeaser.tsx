"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COLLECTIONS } from "@/lib/data";
import PillButton from "@/components/PillButton";

export default function CollectionsTeaser() {
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
          <span className="eyebrow rounded-full bg-neon px-4 py-1.5 border-2 border-ink">
            Curated collections
          </span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink max-w-xl">
            Reading lists,
            <br />
            <span className="font-serif italic font-normal text-bubblegum">
              already made.
            </span>
          </h2>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4">
          {COLLECTIONS.map((collection, i) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="shrink-0 w-64 md:w-auto"
            >
              <Link href={`/collections/${collection.slug}`}>
                <div
                  className="group relative rounded-4xl border-2 border-ink overflow-hidden p-6 min-h-[200px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
                  style={{ background: collection.gradient }}
                >
                  <div className="halftone absolute inset-0 opacity-10 mix-blend-overlay" />
                  <span className="eyebrow relative rounded-full bg-paper/85 border-2 border-ink px-3 py-1 text-ink w-fit">
                    {collection.itemIds.length} picks
                  </span>
                  <h3 className="relative font-display font-black text-xl text-paper leading-tight">
                    {collection.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PillButton variant="ink" href="/collections" icon="→">
            All collections
          </PillButton>
        </div>
      </div>
    </section>
  );
}
