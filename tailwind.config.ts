import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        electric: "#4F6BFF",
        bubblegum: "#FF4FA0",
        lavender: "#ECE7FD",
        "lavender-deep": "#D8CFFB",
        neon: "#E4FF3D",
        ink: "#15112A",
        paper: "#FFFDF9",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(79,107,255,0.45)",
        "glow-pink": "0 0 60px -12px rgba(255,79,160,0.45)",
        pop: "8px 8px 0px 0px rgba(21,17,42,1)",
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
