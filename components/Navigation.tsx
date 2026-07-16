"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PillButton from "@/components/PillButton";

const SECTIONS = [
  { id: "hero", color: "#4F6BFF", label: "Cover" },
  { id: "ticker", color: "#15112A", label: "Ticker" },
  { id: "departments", color: "#FF4FA0", label: "Departments" },
  { id: "feature", color: "#7C6AE8", label: "Feature" },
  { id: "quote", color: "#15112A", label: "Word on the Street" },
  { id: "newsletter", color: "#4F6BFF", label: "Subscribe" },
];

const LINKS = [
  { href: "/vibe", label: "Vibes" },
  { href: "/collections", label: "Collections" },
  { href: "/map", label: "Map" },
  { href: "/my-collection", label: "My List" },
];

export default function Navigation() {
  const [color, setColor] = useState(SECTIONS[0].color);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = SECTIONS.find((s) => s.id === entry.target.id);
            if (match) setColor(match.color);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-[300] flex justify-center px-4">
      <motion.nav
        className="glass flex w-full max-w-3xl items-center justify-between gap-4 rounded-full px-3 py-2 md:px-4 md:py-2.5 shadow-pop border-2 border-ink"
        animate={{ borderColor: color }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Link
          href="/"
          className="font-display text-lg md:text-xl font-black tracking-tight text-ink pl-2"
        >
          PULP<span style={{ color }}>.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider px-3 py-2 rounded-full text-ink/70 hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <motion.span
          className="hidden sm:block h-2.5 w-2.5 rounded-full"
          animate={{ backgroundColor: color }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <PillButton
          variant="ink"
          href="/#newsletter"
          className="!px-4 !py-2 !text-xs md:!text-sm"
        >
          Subscribe
        </PillButton>
      </motion.nav>
    </div>
  );
}
