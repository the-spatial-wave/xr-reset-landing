import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          void: '#080C12',
          deep: '#0F1C2E',
          cyan: '#00E5FF',
          magenta: '#FF2FD6',
          teal: '#2EF2C9',
          violet: '#8B5CF6',
          purple: '#A855F7',
          pink: '#EC4899',
          coral: '#F97316',
          silver: '#C8CCD6',
          fog: 'rgba(183, 192, 204, 0.45)',
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00E5FF, #FF2FD6)',
      }
    },
  },
  plugins: [],
} satisfies Config
