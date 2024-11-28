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

        necosmic: ['Necosmic', 'sans-serif']
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],
        base: ['1rem', { lineHeight: '30px' }],
        md: ['1.25rem', { lineHeight: '2.5rem', letterSpacing: '0' }],
        lg: ['1.375rem', { lineHeight: '2rem', letterSpacing: '0' }],
        xl: ['1.618rem', { lineHeight: '2.25rem', letterSpacing: '0' }],
        '2xl': ['2.618rem', { lineHeight: '3rem', letterSpacing: '1px' }],
        '3xl': ['4.236rem', { lineHeight: '5rem', letterSpacing: '1.5px' }],
        '4xl': ['6.854rem', { lineHeight: '7.5rem', letterSpacing: '2px' }],
        '5xl': ['53.75px', { lineHeight: '113.4px', letterSpacing: '7.56px', }],
        '6xl': ['122.4px', { lineHeight: '183.6px', letterSpacing: '0', }],
        heading: ['250px', { lineHeight: '300px', letterSpacing: '12.5px', }],
      },

      colors: {
        orange: '#E36A46',
        yellow: '#FCC764',
        'yellow-light': '#fff5e4',
        'light-yellow-bg': '#FBF8F0',
        'light-grey-bg': '#F2F1EC',
        'dark-grey': '#717171',
        'light-grey': '#B3B3B3',
        'charcoal': '#1e1e1e',
        'off-white': '#FAF9F6'
      },

      borderColor: {
        DEFAULT: '#1e1e1e',
      },

      boxShadow: {
        'inner': 'inset -1px -1px 3px -1px rgb(0 0 0 / 0.1)',

        'charcoal': '3px 4px 0 #1e1e1e',
        'charcoal-right': '-3px -4px 0 #1e1e1e',
        'charcoal-hover': '1.5px 1.5px 0 #1e1e1e',

        'white': '3px 4px 0 #FBF8F0',
        'white-hover': '1.5px 1.5px 0 #FBF8F0',

        'grey': '2px 4px 0 #717171',

        'card': '6px 8px 0 #B3B3B3',
      },

      animation: {
        'morph': 'morph 2s ease-in-out infinite',
        'waves': 'waves 2s linear infinite',
        'zoom': 'zoom .3s linear',
        'border': 'border 2s linear infinite'

      },

      keyframes: {
        morph: {
          '0%': { 'border-radius': '50% 40% 50% 40% / 50% 50% 50% 50%' },

          '50%': { 'border-radius': '60% 40% 60% 40% / 50% 40% 50% 40%' },

          '100%': { 'border-radius': '50% 40% 50% 40% / 50% 50% 50% 50%' },
        },


        waves: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '200%' },
        },

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
        }

      },
    },
  },
  plugins: [
    // require("@designbycode/tailwindcss-text-shadow")
    //   ({
    //     shadowColor: 'black',
    //     shadowOffsetX: '10px',
    //     shadowOffsetY: '10px',
    //     blurSize: '0',
    //   }),


    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #1e1e1e'
        },


      })
    }
  ]
});
