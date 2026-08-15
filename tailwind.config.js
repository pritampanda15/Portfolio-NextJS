/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        bg: "#0a0a0a",
        elevated: "#111111",
        card: "#161616",
        line: "#222222",
        ink: "#ffffff",
        dim: "#c8c8c8",
        muted: "#888888",
        accent: "#c8ff00",
        accentDim: "#a3cc00",
      },
      letterSpacing: {
        label: "0.2em",
        wide2: "0.125em",
      },
      maxWidth: {
        prose: "72ch",
      },
      backgroundImage: {
        // faint accent graph-paper grid used behind heroes
        grid: `linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)`,
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.25" } },
        pulseLine: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        marquee: "marquee 32s linear infinite",
        blink: "blink 2s ease infinite",
        pulseLine: "pulseLine 2s ease infinite",
      },
    },
    // NOTE: max-width breakpoints — `md:` means "at most 767px".
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
