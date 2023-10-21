import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        sans: ["var(--font-sans)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        content: "hsl(var(--content))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          content: "hsl(var(--primary-content))",
          focus: "hsl(var(--primary-focus))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          content: "hsl(var(--accent-content))",
          focus: "hsl(var(--accent-focus))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          content: "hsl(var(--secondary-content))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          content: "hsl(var(--destructive-content))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          content: "hsl(var(--muted-content))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          content: "hsl(var(--neutral-content))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          content: "hsl(var(--popover-content))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          content: "hsl(var(--card-content))",
        },
      },
      borderRadius: {
        lg: "var(--radius)", /* 12px */
        md: "calc(var(--radius) - 2px)", /* 10px */
        sm: "calc(var(--radius) - 4px)", /* 8px */
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "info-show-down": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "info-show-up": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "info-show-down": "info-show-down 0.3s ease-out",
        "info-show-up": "info-show-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
