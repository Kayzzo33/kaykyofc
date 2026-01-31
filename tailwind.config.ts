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
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        draw: {
          from: { strokeDashoffset: '1000', opacity: '0' },
          to: { strokeDashoffset: '0', opacity: '1' }
        },
        'pulse-cyan': {
          '0%, 100%': { opacity: '0.3', filter: 'drop-shadow(0 0 2px rgba(34,211,238,0.2))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.8))' }
        },
        'scan-vertical': {
          '0%': { top: '0%', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite linear',
        'draw-line': 'draw 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-glow': 'pulse-cyan 3s ease-in-out infinite',
        'scanner': 'scan-vertical 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;