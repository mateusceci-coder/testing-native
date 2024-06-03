/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
      }
    },
  },
  plugins: [],
}

