"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PillButton from "@/components/PillButton";

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="relative w-full overflow-hidden py-24 md:py-32 px-6 md:px-10"
      style={{ background: "linear-gradient(150deg, #4F6BFF 0%, #FF4FA0 100%)" }}
    >
      <div className="halftone absolute inset-0 opacity-10 mix-blend-overlay" />

      <motion.div
        animate={{ rotate: [0, 8, 0], y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-8 right-10 h-24 w-24 rounded-3xl bg-neon border-2 border-ink hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 left-10 h-16 w-16 rounded-full bg-paper/80 border-2 border-ink hidden md:block"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow inline-block rounded-full bg-paper px-4 py-1.5 border-2 border-ink text-ink"
        >
          Join 200k+ readers
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] text-paper"
        >
          Never miss an
          <br />
          <span className="font-serif italic font-normal">issue.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-paper/85 text-base md:text-lg"
        >
          One email, every Thursday. No spam, just the stuff worth
          forwarding.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass mt-10 flex flex-col sm:flex-row items-center gap-3 rounded-full border-2 border-ink p-2 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email address"
            className="w-full flex-1 bg-transparent px-5 py-3 text-ink placeholder:text-ink/50 outline-none font-body text-sm md:text-base"
          />
          <PillButton
            variant={submitted ? "neon" : "ink"}
            className="w-full sm:w-auto justify-center"
          >
            {submitted ? "You're in ✓" : "Subscribe"}
          </PillButton>
        </motion.form>
      </div>
    </section>
  );
}
