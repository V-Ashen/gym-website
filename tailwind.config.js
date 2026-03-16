/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',      // Main background
          dark: '#1E1E1E',       // Card backgrounds
          yellow: '#D49A1E',     // Buttons and accents
          light: '#F4F4F4',      // Text color
        }
      }
    },
  },
  plugins: [],
}