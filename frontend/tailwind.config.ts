import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Newsreader", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4a1b0c",
          foreground: "#fbfaf8",
        },
        secondary: {
          DEFAULT: "#f0ece4",
          foreground: "#2c2c2a",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "#8a8880",
        },
        accent: {
          DEFAULT: "#d85a30",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        notion: {
          cream: "#fbfaf8",
          card: "#ffffff",
          border: "#ece9e3",
          text: "#2c2c2a",
          muted: "#8a8880",
          active: "#f0ece4",
          maroon: "#4a1b0c",
          pillBg: "#faece7",
          pillText: "#4a1b0c",
          coral: "#d85a30",
        }
      },
      borderRadius: {
        xl: "0.625rem", // 10px
        lg: "0.5rem",   // 8px
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
