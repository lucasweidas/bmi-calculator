/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          200: 'hsl(0, 0%, 87%)',
          500: 'hsl(208, 11%, 47%)',
        },
        pink: {
          100: 'hsl(329, 84%, 93%)',
          400: 'hsl(333, 64%, 61%)',
        },
        blue: {
          200: 'hsl(208, 65%, 82%)',
          500: 'hsl(226, 92%, 59%)',
          800: 'hsl(216, 30%, 21%)',
          900: 'hsl(217, 21%, 22%)',
        },
        teal: {
          600: 'hsl(178, 48%, 58%)',
        },
        yellow: {
          700: 'hsl(46, 74%, 67%)',
        },
        purple: {
          500: 'hsl(265, 51%, 58%)',
        },
        turquoise: {
          100: 'hsl(188, 64%, 91%)',
        },
        orange: {
          100: 'hsl(32, 72%, 93%)',
          400: 'hsl(31, 68%, 65%)',
          500: 'hsl(15, 84%, 57%)',
        },
        indigo: {
          50: 'hsl(235, 93%, 95%)',
        },
        sky: {
          50: 'hsl(203, 92%, 95%)',
        },
      },
    },
  },
  plugins: [],
};
