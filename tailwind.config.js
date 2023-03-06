/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

      extend: {
        colors: {
          primary: "#404eed",
          black: "#23272a",
        },
      },
    },
    plugins: [],
  }
