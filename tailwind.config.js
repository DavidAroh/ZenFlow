import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ec5b",
        "primary-hover": "#0fb946",
        "primary-dark": "#16a34a",
        "primary-light": "#dcfce7",
        "background-light": "#f6f8f6",
        "background-dark": "#111813",
        "surface-dark": "#1c271f",
        "surface-darker": "#161e18",
        "surface-light": "#ffffff",
        "alert-high": "#fa5538",
        "alert-med": "#ffb02e",
        "accent-warning": "#ff9f43",
        "accent-danger": "#ff6b6b",
        "text-main": "#111811",
        "text-muted": "#9db9a6",
        "text-secondary": "#9db9a6",
        "card-dark": "#1c2620",
        "card-hover": "#26332b",
        "border-dark": "#28392e",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
      },
      borderRadius: {
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
