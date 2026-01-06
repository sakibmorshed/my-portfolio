/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#10b981", // Emerald 500
        "primary-hover": "#059669",
        "background-light": "#f8fafc", // Slate 50
        "background-dark": "#0a0a0a", // Neutral 950
        "surface-light": "#ffffff",
        "surface-dark": "#171717", // Neutral 900
        "code-tag": "#ef4444", // Red 500
        "code-attr": "#a855f7", // Purple 500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}