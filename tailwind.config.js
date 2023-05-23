/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'TC': ['Noto Sans TC','sans-serif']
    },
    container: {
      center: true, 
      padding: "16px",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1328px',
      },
    },
    extend: {
      colors: {
        black: {
          0: '#FFFFFF',
          200: '#F2F2F2',
          400: '#D1D1D1',
          600: '#919191',
          800: '#525252',
          1000: '#020202'
        },
        primary: '#F18724',
        surface: '#F2EFE7'
      }
    },
    backgroundImage: {
      'black-gradient': "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,1) 100%)"
    },
    boxShadow: {
      'cardshaow': '0px 4px 20px rgba(0, 0, 0, 0.15)',
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [],
}