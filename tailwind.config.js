/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './dist/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#404eed",
        black: "#23272a",
      },
    },
  },
  plugins: [],
}
