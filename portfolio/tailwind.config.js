/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['text-orange'],

  theme: {
    extend: {
      fontFamily: {
        roundo: ['Roundo-Regular', 'sans-serif'],
        'roundo-light': ['Roundo-ExtraLight', 'sans-serif'],
        'roundo-medium': ['Roundo-Medium', 'sans-serif'],
        'roundo-semibold': ['Roundo-SemiBold', 'sans-serif'],
        'roundo-bold': ['Roundo-Bold', 'sans-serif'],

        craftwork: ['Craftwork Grotesk', 'sans-serif'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '35px' }],
        md: ['1.25rem'],
        lg: ['1.375rem'],
        xl: ['1.618rem'],
        '2xl': ['2.618rem', { lineHeight: '3.8rem' }],
        '3xl': ['4.236rem', { lineHeight: '5rem' }],
        '4xl': ['6.854rem', { lineHeight: '7.5rem', letterSpacing: '2px' }],
        '5xl': ['53.75px', { lineHeight: '113.4px', letterSpacing: '7.56px', }],
        '6xl': ['122.4px', { lineHeight: '183.6px', letterSpacing: '0', }],
        heading: ['250px', { lineHeight: '300px', letterSpacing: '12.5px', }],
      },
      lineHeight: {
        normal: '1.618'
      },

      colors: {
        orange: '#E36A46',
        yellow: '#FCC764',
        blue: '#7BB6D8',
        'yellow-light': '#fff5e4',
        'light-yellow-bg': '#FBF8F0',
        'light-yellow-bg-copy': '#FBF8F0',
        'darker-bg': '#e1dfd8',
        'light-grey-bg': '#F2F1EC',
        'dark-grey': '#717171',
        'light-grey': '#B3B3B3',
        'charcoal': '#1e1e1e',
        'off-white': '#FAF9F6',
        'brown': '#342A1A'
      },

      borderColor: {
        DEFAULT: '#1e1e1e',
      },

      boxShadow: {
        'inner': 'inset -1px -1px 3px -1px rgb(0 0 0 / 0.1)',

        'charcoal': '2px 3px 0 #1e1e1e',
        'charcoal-right': '-3px -4px 0 #1e1e1e',
        'charcoal-hover': '1.2px 1.2px 0 #1e1e1e',

        'white': '2px 3px 0 #FBF8F0',
        'white-hover': '1.2px 1.2px 0 #FBF8F0',

        'grey': '2px 4px 0 #717171',

        'card': '6px 8px 0 #B3B3B3',
      },

      animation: {

        'zoom': 'zoom .3s linear',
        'border': 'border 2s linear infinite',
        'flash': 'flash 1s ease-out infinite',
        'slideIn': 'slideIn 0.5s ease-out forwards',
        'slideOut': 'slideOut 0.5s ease-out forwards'
      },

      keyframes: {
        zoom: {
          '0%': { transform: 'scale(.8)' },
          '100%': { transform: 'scale(1)' }
        },

        border: {
          '0%': {
            'border-width': '0px',
            'border-color': 'transparent',
          },
          '50%': {
            'border-width': '4px',
            'border-color': 'red',
            'border-style': 'solid',
          },
          '100%': {
            'border-width': '4px',
            'border-color': 'red',
          },
        },

        flash: {
          '0%, 100%': { color: 'black' },
          '50%': { color: 'grey' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
    },
  },
  plugins: [

    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #342A1A'
        },
        '.text-white-stroke': {
          '-webkit-text-stroke': '2px #e1dfd8'
        },


      })
    }
  ]
});
