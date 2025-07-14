/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zari-teal': '#00D9D0',
        'zari-dark': '#1a1a1a',
        'zari-gray': '#f5f5f5',
      },
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}