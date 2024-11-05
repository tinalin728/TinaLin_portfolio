/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        roundo: ['Roundo-Regular', 'sans-serif'],
        'roundo-light': ['Roundo-ExtraLight', 'sans-serif'],
        'roundo-medium': ['Roundo-Medium', 'sans-serif'],
        'roundo-semibold': ['Roundo-SemiBold', 'sans-serif'],
        'roundo-bold': ['Roundo-Bold', 'sans-serif'],

        craftwork: ['Craftwork Grotesk', 'sans-serif'],

        aleo: ['Aleo', 'serif'],
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
        orange: '#F64117',
        yellow: '#FEE6BD',
        'light-yellow-bg': '#FBF8F0',
        'light-grey-bg': '#F2F1EC',
        'dark-grey': '#717171',
        'light-grey': '#B3B3B3',
        'off-white': '#FAF9F6'
      },

      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.2)'
      },

      animation: {
        'morph': 'morph 2s ease-in-out infinite',
        'text-animation': 'text-animation 8s ease-in infinite',
        'text-animation-md': 'text-animation-md 8s ease-in infinite',
        'text-animation-lg': 'text-animation-lg 8s ease-in infinite',
        // 'typing': 'typing 5s steps(16) infinite',
        // 'cursor': 'cursor 5s infinite'
        'typingCursor': 'typingCursor 4s steps(16) infinite',

      },

      keyframes: {
        morph: {
          '0%': { 'border-radius': '50% 40% 50% 40% / 50% 50% 50% 50%' },

          '50%': { 'border-radius': '60% 40% 60% 40% / 50% 40% 50% 40%' },

          '100%': { 'border-radius': '50% 40% 50% 40% / 50% 50% 50% 50%' },
        },

        'text-animation': {
          '0%, 100%': { top: '0' },
          '20%': { top: '0' },
          '25%': { top: '-65px' },
          '45%': { top: '-65px' },
          '50%': { top: '-125px' },
          '70%': { top: '-125px' },
          '75%': { top: '-185px' },
          '95%': { top: '-185px' },
        },

        'text-animation-md': {
          '0%, 100%': { top: '0' },
          '20%': { top: '0' },
          '25%': { top: '-95px' },
          '45%': { top: '-95px' },
          '50%': { top: '-185px' },
          '70%': { top: '-185px' },
          '75%': { top: '-275px' },
          '95%': { top: '-275px' },
        },

        'text-animation-lg': {
          '0%, 100%': { top: '0' },
          '20%': { top: '0' },
          '25%': { top: '-112px' },
          '45%': { top: '-112px' },
          '50%': { top: '-224px' },
          '70%': { top: '-224px' },
          '75%': { top: '-336px' },
          '95%': { top: '-336px' },
        },
        typingCursor: {
          '3%': { left: '0%' },
          '30%': { left: '102%', borderLeft: '2px solid black' },
          '38%': { left: '102%', borderLeft: '2px solid white' },
          '46%': { left: '102%', borderLeft: '2px solid black' },
          '54%': { left: '102%', borderLeft: '2px solid white' },
          '62%': { left: '102%', borderLeft: '2px solid black' },
          '70%': { left: '102%' },
          '80%': { left: '102%', borderLeft: '2px solid black' },
          '100%': { left: '0%' },
        },
      }
    },
  },
  plugins: [

    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1.2px #717171'
        }
      })
    }
  ]
}
