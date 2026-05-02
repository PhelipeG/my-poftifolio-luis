import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1600px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    fontFamily: {
      primary: "var(--font-sans)",
      display: "var(--font-display)",
      mono: "var(--font-jetbrains-mono)",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0"},
          to: { height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          to: { height: "var(--radix-accordion-content-height)"},
          from: { height: "0"},
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 20s linear infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      colors: {
        primary: '#5c94fc',
        accent: {
          DEFAULT: '#e52521',
          hover: '#ff3b30',
        },
        mario: {
          sky: '#5c94fc',
          cloud: '#f8f8f8',
          brick: '#b85a24',
          brickDark: '#7c3418',
          question: '#fbd000',
          coin: '#f7d51d',
          red: '#e52521',
          blue: '#049cd8',
          green: '#43b047',
          pipe: '#2fa346',
          ground: '#8b4513',
          panel: '#2b1b14',
          shell: '#f8f8f8',
          violet: '#3d2f8f',
          yellow: '#fbd000',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
