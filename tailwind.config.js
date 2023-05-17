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
  },
  plugins: [],
}