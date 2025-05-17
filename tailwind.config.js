/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f0ede7',
          200: '#e1dacf',
          300: '#cec2af',
          400: '#b6a689',
          500: '#a38e6c',
          600: '#8c7656',
          700: '#735f47',
          800: '#5f4e3d',
          900: '#504236',
        },
        accent: {
          50: '#fbf7f1',
          100: '#f5ebdb',
          200: '#ead6b6',
          300: '#debb88',
          400: '#d2a05f',
          500: '#c4863f',
          600: '#b56c34',
          700: '#96532e',
          800: '#7a442b',
          900: '#653a25',
        },
        gold: {
          50: '#fdf9ed',
          100: '#faf2d2',
          200: '#f5e2a5',
          300: '#efcc6d',
          400: '#e9b33e',
          500: '#e39b1e',
          600: '#cd7918',
          700: '#a85918',
          800: '#8a461a',
          900: '#723b19',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};