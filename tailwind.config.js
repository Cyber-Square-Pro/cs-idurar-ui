/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hideScroll': {
          overflowY: 'scroll',
          scrollbarWidth: 'none',
        },
        '.hideScroll::-webkit-scrollbar': {
          display: 'none',
        }
      })
    },
  ],
}

