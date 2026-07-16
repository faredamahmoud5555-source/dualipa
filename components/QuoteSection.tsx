"use client";

import { motion } from "framer-motion";

const QUOTE = "Culture doesn't trickle down anymore. It explodes sideways.";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const word = {
  hidden: { opacity: 0, y: 24, rotate: 3 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative w-full bg-ink py-28 md:py-36 px-6 md:px-10 overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-10 left-10 h-40 w-40 rounded-full blur-3xl opacity-40"
        style={{ background: "#4F6BFF" }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full blur-3xl opacity-30"
        style={{ background: "#FF4FA0" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow inline-block rounded-full glass-dark px-4 py-1.5 text-paper mb-8"
        >
          Word on the street
        </motion.span>

        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="font-serif italic font-normal text-3xl md:text-6xl leading-tight text-paper flex flex-wrap justify-center gap-x-3 gap-y-2"
        >
          {QUOTE.split(" ").map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block">
              {w}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="eyebrow mt-8 text-paper/50"
        >
          &mdash; overheard at the PULP. office
        </motion.p>
      </div>
    </section>
  );
}
