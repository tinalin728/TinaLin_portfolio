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
        sm: ['0.75rem', {
          lineHeight: '1rem',
          letterSpacing: '0',
        }],
        base: ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0',
        }],
        xl: ['1.25rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0',
        }],
        '2xl': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '2px',
        }],
        '3xl': ['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '3px',
        }],
        '4xl': ['75.6px', {
          lineHeight: '113.4px',
          letterSpacing: '7.56px',
        }],
        '5xl': ['122.4px', {
          lineHeight: '183.6px',
          letterSpacing: '0',
        }],
        heading: ['250px', {
          lineHeight: '300px',
          letterSpacing: '12.5px',
        }],
      },

      colors: {
        orange: '#F64117',
        yellow: '#FEE6BD',
        'light-yellow-bg': '#FBF8F0',
        'light-grey-bg': '#F2F1EC',
        'dark-grey': '#717171',
        'light-grey': '#B3B3B3'
      },

      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.2)'
      }

    },
  },
  plugins: [

    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #717171'
        }
      })
    }
  ]
}
