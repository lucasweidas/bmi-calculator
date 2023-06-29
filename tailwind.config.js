/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        '2lg': '1.375rem',
      },
      lineHeight: {
        tiny: 1.125,
      },
      colors: {
        gray: {
          200: 'hsl(0, 0%, 87%)',
          300: 'hsl(220, 3%, 81%)',
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
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '9xl': '4.5rem',
      },
      gap: {
        4.5: '1.125rem',
      },
      padding: {
        12.5: '3.25rem',
        74: '19rem',
      },
      backgroundImage: {
        'linear-gradient-blue-50': 'linear-gradient(135deg, hsla(220, 82%, 98%, 0.2) 0%, hsla(220, 82%, 98%, 0.5) 52.21%, hsl(220, 82%, 98%) 100%)',
        'linear-gradient-blue-200':
          'linear-gradient(135deg, hsla(203, 92%, 95%, 0.2) 0%, hsla(203, 92%, 95%, 0.4) 24.66%, hsla(203, 92%, 95%, 0.7) 39.96%, hsl(215, 95%, 92%) 100%)',
        'linear-gradient-blue-500': 'linear-gradient(90deg, hsl(226, 92%, 59%) 0%, hsla(226, 92%, 59%, 0.85) 100%)',
      },
      boxShadow: {
        card: '8px 12px 24px 6px hsla(227, 55%, 51%, 0.08)',
      },
      width: {
        'card-lg': 'min(100% - 2.50rem, 43rem)',
        'card-md': 'min(100%, 35.25rem)',
      },
      screens: {
        mobile: '375px',
      },
    },
  },
  plugins: [],
};
