import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        grain: "url('/bg-grain.png')",
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-primary) / 0.4)",
        background: "rgb(var(--color-background))",
      },
      fontFamily: {
        primary: "var(--font-instrument-sans)",
        secondary: "var(--font-space-grotesk)",
      },
    },
    fontSize: {
      xs: ["0.625rem", { letterSpacing: "0.03em", lineHeight: "1" }],
      sm: ["0.75rem", { letterSpacing: "0.03em", lineHeight: "1" }],
      base: ["0.875rem", { letterSpacing: "0.03em", lineHeight: "1" }],
      lg: ["1.875rem", { letterSpacing: "-0.05em", lineHeight: "0.8", fontWeight: "500" }],
      xl: ["3.5rem", { letterSpacing: "-0.05em", lineHeight: "0.8" }],
      "2xl": ["3.75rem", { letterSpacing: "-0.05em", lineHeight: "0.8" }],
      "3xl": ["8.75rem", { letterSpacing: "-0.05em", lineHeight: "0.8" }],
    },
  },
  plugins: [],
};

export default config;
