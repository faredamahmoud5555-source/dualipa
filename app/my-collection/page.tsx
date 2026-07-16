"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ITEMS } from "@/lib/data";
import { useCollection } from "@/lib/useCollection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";
import PillButton from "@/components/PillButton";

export default function MyCollectionPage() {
  const { ids } = useCollection();
  const items = ITEMS.filter((i) => ids.includes(i.id));

  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow rounded-full bg-lavender px-4 py-1.5 border-2 border-ink">
            Your magazine
          </span>
          <h1 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink max-w-2xl">
            Everything
            <br />
            <span className="font-serif italic font-normal text-bubblegum">
              you&apos;ve collected.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-ink/60 text-base md:text-lg">
            Saved on this device only &mdash; tap the heart on anything you
            like to build your own issue.
          </p>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16 rounded-4xl border-2 border-ink border-dashed p-16 text-center"
            >
              <p className="text-4xl mb-4">🤍</p>
              <p className="font-display font-black text-xl text-ink mb-2">
                Nothing here yet.
              </p>
              <p className="text-ink/60 mb-8">
                Start collecting from any book, playlist or place you find.
              </p>
              <PillButton variant="electric" href="/vibe">
                Discover a vibe
              </PillButton>
            </motion.div>
          ) : (
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} compact />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
