import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0a",
          secondary: "#141414",
          tertiary: "#1f1f1f",
        },
        blue: {
          primary: "#0ea5e9",
          glow: "#38bdf8",
          dark: "#0284c7",
        },
        gold: {
          primary: "#fbbf24",
          light: "#fde047",
          dark: "#d97706",
        },
        gray: {
          text: "#e5e7eb",
          muted: "#9ca3af",
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #fbbf24 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(251,191,36,0.1) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(-10px, -10px)' },
          '75%': { transform: 'translate(5px, -20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;