import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Brand seeds
        sprout: {
          DEFAULT: "#4CAF50",
          50: "#EDF7ED",
          100: "#D4ECD5",
          200: "#ABDBAD",
          300: "#82C985",
          400: "#66BC6A",
          500: "#4CAF50",
          600: "#3D9A41",
          700: "#2F7D33",
          800: "#245F27",
          900: "#1B481E",
        },
        sage: {
          DEFAULT: "#A8C686",
          50: "#F3F7EC",
          100: "#E6EFD7",
          200: "#CFE0B6",
          300: "#BAD49B",
          400: "#A8C686",
          500: "#94B86E",
          600: "#7A9E55",
          700: "#5F7C43",
          800: "#475D33",
          900: "#354627",
        },
        gold: {
          DEFAULT: "#F4B942",
          50: "#FEF8E9",
          100: "#FCEDC4",
          200: "#F9DD93",
          300: "#F6CB63",
          400: "#F4B942",
          500: "#EBA51F",
          600: "#CE8612",
          700: "#A2670F",
          800: "#7C4F12",
          900: "#654113",
        },
        terra: {
          DEFAULT: "#C86B3C",
          50: "#FAEEE7",
          100: "#F2D8C7",
          200: "#E5B499",
          300: "#D8906C",
          400: "#C86B3C",
          500: "#B25A2E",
          600: "#934826",
          700: "#74381E",
          800: "#582B17",
          900: "#422013",
        },
        cream: "#FAF8F2",
        earth: "#5A4634",
        stone: "#E7E2D8",
        ink: {
          DEFAULT: "#3A2D20",
          body: "#5A4634",
          muted: "#8C7F6A",
          subtle: "#B3A892",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#FAF8F2",
          100: "#F3EFE6",
          150: "#ECE6D9",
          200: "#E7E2D8",
          300: "#D4CCBC",
          400: "#B3A892",
          500: "#8C7F6A",
          600: "#6E6049",
          700: "#5A4634",
          800: "#433527",
          900: "#2A2017",
        },
        // shadcn semantic
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "16px",
        lg: "22px",
        xl: "30px",
        "2xl": "40px",
        "3xl": "56px",
        pill: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(90, 70, 52, 0.06)",
        sm: "0 2px 6px rgba(90, 70, 52, 0.07), 0 1px 2px rgba(90, 70, 52, 0.05)",
        md: "0 6px 16px rgba(90, 70, 52, 0.08), 0 2px 5px rgba(90, 70, 52, 0.05)",
        lg: "0 16px 36px rgba(90, 70, 52, 0.10), 0 4px 10px rgba(90, 70, 52, 0.05)",
        xl: "0 28px 60px rgba(90, 70, 52, 0.14), 0 8px 18px rgba(90, 70, 52, 0.06)",
        brand: "0 14px 30px rgba(76, 175, 80, 0.26)",
        gold: "0 14px 30px rgba(244, 185, 66, 0.30)",
      },
      backgroundImage: {
        "gradient-sun": "linear-gradient(135deg, #FDEFC9 0%, #FAF8F2 60%)",
        "gradient-meadow":
          "linear-gradient(160deg, #EDF7ED 0%, #F3F7EC 50%, #FAF8F2 100%)",
        "gradient-leaf":
          "linear-gradient(135deg, #66BC6A 0%, #3D9A41 100%)",
        "gradient-harvest":
          "linear-gradient(135deg, #F6CB63 0%, #C86B3C 120%)",
        "gradient-dawn":
          "linear-gradient(180deg, #FCEFD2 0%, #F6F8EC 100%)",
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.03em",
        tight: "-0.018em",
        wider: "0.12em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sway: "sway 5s ease-in-out infinite",
        "accordion-down": "accordion-down 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up": "accordion-up 0.22s cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [animate],
};

export default config;
