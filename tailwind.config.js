/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up-fade': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-top': 'slideInTop 0.5s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 0.5s ease-out forwards',
        'slide-up-fade': 'slide-up-fade 0.5s ease-out forwards',
      },
      colors: {
        customRed: {
          100: '#fce5e6',
          200: '#f9babc',
          300: '#f58f91',
          400: '#f26466',
          500: '#c7272e', // base color
          600: '#9e1f25',
          700: '#75171b',
          800: '#4d0f12',
        },
        customBlue: {
          100: '#e3e8f1',
          200: '#b2c1da',
          300: '#809ac3',
          400: '#4f73ac',
          500: '#1a4272',//'#1a4272', // base color
          600: '#14345a',
          700: '#305480',
          800: '#08182a',
        },
      },
      boxShadow: {
        'custom-deep': '0px 1px 42px 0px rgba(0, 0, 0, 0.05)',
      },



    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    // require('@tailwindcss/forms')
  ],
}
