"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Discover the Vibe", href: "/vibe" },
      { label: "Curated Collections", href: "/collections" },
      { label: "Explore by City", href: "/map" },
      { label: "My Collection", href: "/my-collection" },
    ],
  },
  {
    title: "Departments",
    links: [
      { label: "Style", href: "/vibe/parisian" },
      { label: "Sound", href: "/vibe/y2k" },
      { label: "Screen", href: "/vibe/dark-academia" },
      { label: "Voices", href: "/vibe/late-night" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-ink px-6 md:px-10 pt-20 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-bubblegum/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <h2 className="font-display font-black text-5xl md:text-7xl text-paper">
              PULP<span className="text-neon">.</span>
            </h2>
            <p className="mt-4 max-w-xs text-paper/60 text-sm md:text-base">
              Culture, uncensored. A newsletter and website for people who
              read the group chat before the news.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Instagram", "TikTok", "X"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -4, backgroundColor: "#E4FF3D", color: "#15112A" }}
                transition={{ duration: 0.25 }}
                className="rounded-full border-2 border-paper/30 px-4 py-2 text-paper text-sm font-display font-bold"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t-2 border-paper/15 pt-10">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-paper/50 mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-paper/80 hover:text-neon transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-paper/40 text-xs">
          <span>&copy; {new Date().getFullYear()} PULP. Not a real magazine. Yet.</span>
          <span>Made with too much caffeine.</span>
        </div>
      </div>
    </footer>
  );
}
