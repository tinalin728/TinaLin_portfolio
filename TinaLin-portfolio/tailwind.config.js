/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    'text-[#C8102E]'
  ],
  theme: {
    extend: {
      colors: {
        test: '#ff00ff',
        colors: {
          gray: {
            50: '#F3F3F3',
            100: '#E5E5E5',
            200: '#D5D5D5',
            300: '#c0c0c0',
            400: '#A0A0A0',
            500: '#7F7F7F',
            600: '#5F5F5F',
            700: '#333333',
            800: '#1A1A1A', //main
            900: '#141414',
          },
        }
      },
    },
  },
  plugins: [],
};
