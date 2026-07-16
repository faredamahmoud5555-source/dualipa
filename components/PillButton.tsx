"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "electric" | "bubblegum" | "ink" | "neon";

const VARIANT_STYLES: Record<Variant, string> = {
  electric: "bg-electric text-white",
  bubblegum: "bg-bubblegum text-white",
  ink: "bg-ink text-paper",
  neon: "bg-neon text-ink",
};

export default function PillButton({
  children,
  variant = "electric",
  href,
  onClick,
  className = "",
  icon,
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}) {
  const Component: any = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-bold text-sm md:text-base shadow-pop border-2 border-ink cursor-pointer select-none ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          {icon}
        </span>
      )}
    </Component>
  );
}
