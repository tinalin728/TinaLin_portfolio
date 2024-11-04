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
        md: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
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
          '25%': { top: '-60px' },
          '45%': { top: '-60px' },
          '50%': { top: '-120px' },
          '70%': { top: '-120px' },
          '75%': { top: '-180px' },
          '95%': { top: '-180px' },
        },

        'text-animation-md': {
          '0%, 100%': { top: '0' },
          '20%': { top: '0' },
          '25%': { top: '-90px' },
          '45%': { top: '-90px' },
          '50%': { top: '-180px' },
          '70%': { top: '-180px' },
          '75%': { top: '-270px' },
          '95%': { top: '-270px' },
        },

        'text-animation-lg': {
          '0%, 100%': { top: '0' },
          '20%': { top: '0' },
          '25%': { top: '-110px' },
          '45%': { top: '-110px' },
          '50%': { top: '-220px' },
          '70%': { top: '-220px' },
          '75%': { top: '-330px' },
          '95%': { top: '-330px' },
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
