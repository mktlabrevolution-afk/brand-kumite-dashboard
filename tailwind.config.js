/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',
        'brand-card': '#1e293b',
        'teclab': '#0ea5e9', // lighter blue
        'digitalhouse': '#f43f5e', // rose/red
        'platzi': '#10b981', // green
        'coderhouse': '#f59e0b', // amber
      }
    },
  },
  plugins: [],
}
