/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'lg': '1440px',
      },
      colors: {
        'white': 'var(--clr-white)',
        'light-gray': 'var(--clr-light-gray)',
        'light-blue-gray': 'var(--clr-blue-gray)',
        'light-dark-blue': 'var(--clr-dark-blue)',
      },
      fontSize:{
        'base': 'var(--font-size)',
      }
    },
  },
  plugins: [],
};