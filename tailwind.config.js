/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jakarta: 'Plus Jakarta Sans',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '40px': '40px',
      '60px': '60px',
    },
    extend: {
      colors: {
        gray: {
          25: '#DCDCDC',
          100: '#f7fafc',
          200: '#8A8A8A',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#424242',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        primary: {
          100: '#202A44',
          200: '#F1AE10',
        },
        base: {
          100: '#787486',
        },
      },

      backgroundImage: {
        'button-gradient':
          'linear-gradient(92.76deg, #4C5ACD 50.52%, #F598AA 150.68%, #FDDFD0 168.67%)',

        'hero-banner': 'url(/assets/images/hero-banner.svg)',
      },

      lineHeight: {
        120: '120%',
        150: '150%',
      },
    },
  },
  plugins: [],
};
