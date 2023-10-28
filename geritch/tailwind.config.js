/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cormorantUpright:['Cormorant Upright'],
      }, 
      colors:{
        yellow:"#DCCA87",
        lightYellow:"#AAAAAA"
      }
    },
  },
  plugins: [],
}

