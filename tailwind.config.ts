import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
        "dm-sans": ["var(--font-dm-sans)", ...fontFamily.sans],
        "dm-serif": ["var(--font-dm-serif)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-light": "#CCD4E2",
        "blue-dark": "#00486D",
        "blue-muted": "#99B6C5",
        "blue-ultra-light": "#E4ECF0",
        "gray-light": "#F2F6F7",
        "blue-medium": "#4D7F99",
        "blue-deep": "#002B41",
      },
      boxShadow: {
        custom: "0 24px 24px 0 rgba(0, 72, 109, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
