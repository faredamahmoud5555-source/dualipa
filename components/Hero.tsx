"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PillButton from "@/components/PillButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBlobA = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yBlobB = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-lavender pt-32 pb-20 md:pt-40"
    >
      {/* floating gradient blobs */}
      <motion.div
        style={{
          y: yBlobA,
          background:
            "radial-gradient(circle, rgba(79,107,255,0.55) 0%, rgba(79,107,255,0) 70%)",
        }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-16 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full blur-2xl opacity-70"
      />
      <motion.div
        style={{
          y: yBlobB,
          background:
            "radial-gradient(circle, rgba(255,79,160,0.55) 0%, rgba(255,79,160,0) 70%)",
        }}
        animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 right-[-6rem] h-64 w-64 md:h-80 md:w-80 rounded-full blur-2xl opacity-60"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-6 md:px-10">
        {/* left: masthead + headline */}
        <motion.div
          style={{ y: yHeadline, opacity: fadeOut }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-ink shadow-pop border-2 border-ink"
          >
            <span className="h-2 w-2 rounded-full bg-bubblegum" />
            Issue No. 12 &mdash; Out Now
          </motion.span>

          <h1 className="font-display font-black leading-[0.92] text-ink text-[15vw] sm:text-[11vw] md:text-[6vw]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              CULTURE
            </motion.span>
            <motion.span
              className="block font-serif italic font-normal text-electric"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              uncensored,
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              undone.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 max-w-md text-base md:text-lg text-ink/70"
          >
            The internet&apos;s favourite dispatch on style, sound, screen
            and everything you were going to text your group chat about
            anyway.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PillButton variant="electric" href="#departments" icon="→">
              Read the issue
            </PillButton>
            <PillButton variant="ink" href="#newsletter">
              Get the newsletter
            </PillButton>
          </motion.div>
        </motion.div>

        {/* right: floating cover card, no photography needed — bold shapes */}
        <motion.div
          style={{ y: yCard }}
          className="md:col-span-5 relative flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-4xl border-2 border-ink shadow-pop overflow-hidden"
            style={{
              background:
                "linear-gradient(155deg, #4F6BFF 0%, #FF4FA0 100%)",
            }}
          >
            <div className="halftone absolute inset-0 opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="eyebrow self-start rounded-full bg-neon px-3 py-1 text-ink border-2 border-ink">
                Cover Story
              </span>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                            






<div className="relative h-40 w-40 md:h-52 md:w-52">

  {/* vinyl circle */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute inset-0
      rounded-full
      border-2 border-ink
      bg-[#15142b]
      shadow-pop
      flex items-center justify-center
    "
  >

    {/* vinyl grooves */}
    <div className="
      absolute inset-5 
      rounded-full 
      border border-white/20
    "/>

    <div className="
      absolute inset-12
      rounded-full
      bg-bubblegum
      border-2 border-ink
    "/>

    <div className="
      h-5 w-5
      rounded-full
      bg-paper
      border-2 border-ink
    "/>

  </motion.div>


  {/* neon star sticker */}
  <motion.div
    animate={{
      y:[0,-10,0],
      rotate:[-10,10,-10]
    }}
    transition={{
      duration:3,
      repeat:Infinity
    }}
    className="
      absolute
      -top-5
      -right-5
      h-16 w-16
      rounded-full
      bg-neon
      border-2 border-ink
      flex items-center justify-center
      text-3xl
      shadow-pop
    "
  >
    ✦
  </motion.div>


  {/* tiny label */}
  <div
    className="
    absolute
    -bottom-5
    -left-10
    rounded-full
    bg-paper
    border-2 border-ink
    px-4 py-2
    shadow-pop
    "
  >
    <span className="eyebrow">
      CULTURE MIX
    </span>
  </div>

</div>
























              </motion.div>

              <div>
                <p className="font-serif italic text-2xl text-paper leading-snug">
                  &ldquo;I don&apos;t chase trends, I set them.&rdquo;
                </p>
                <p className="eyebrow mt-3 text-paper/80">
                  In conversation with the girl of the summer
                </p>
              </div>
            </div>
          </motion.div>

          {/* small floating tag card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            whileHover={{ y: -6, rotate: 3 }}
            className="glass absolute -left-4 bottom-6 md:-left-10 rounded-3xl border-2 border-ink px-5 py-3 shadow-pop"
          >
            <p className="font-display font-extrabold text-sm text-ink">
              🔥 Trending now
            </p>
            <p className="eyebrow text-ink/60">The pop-girl renaissance</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
