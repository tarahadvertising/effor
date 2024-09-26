/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './public/*.html',
    './src/**/*.{js,ts,jsx,tsx,html,css}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9E5B8',
          100: '#F3D09C',
          200: '#EDD082',
          300: '#E6C053',
          400: '#D9B23D',
          500: '#C49A26',
          600: '#B68A23',
          700: '#A57B1F',
          800: '#94701A',
          900: '#7B5913',
        },
        secondary: 'var(--secondary-color)',
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      fontSize: {
        'xs-custom': '8px',
      },
    },
  },
  plugins: [],
}

