import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#020202",
          soft: "#08090B",
          panel: "#0F1115",
          panel2: "#0F1115",
          panel3: "#16181B",
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.07)",
          strong: "rgba(255, 255, 255, 0.16)",
        },
        text: {
          DEFAULT: "#F4F6F9",
          soft: "#8E97A5",
          muted: "#5E6773",
        },
        accent: {
          DEFAULT: "#D6DCE4",
          2: "#8E97A5",
          3: "#262A30",
        },
        zinc: {
          50: "#F4F6F9",
          200: "#D6DCE4",
          400: "#8E97A5",
          500: "#5E6773",
          700: "#262A30",
          800: "#16181B",
          900: "#0F1115",
        },
      },
      borderRadius: {
        brand: "18px",
        "brand-sm": "12px",
      },
      boxShadow: {
        brand: "0 30px 80px -30px rgba(0, 0, 0, 0.85)",
      },
    },
  },
  plugins: [],
};

export default config;
