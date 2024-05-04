/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryRegular: ['Roboto-Regular'],
        primaryBold: ['Roboto-Bold']
      },
      backgroundImage: {
        'BG!': "url('../public/BG!.jpg')"
      }
    },
  },
  plugins: [],
}