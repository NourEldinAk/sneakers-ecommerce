/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGrayish: '#68707d',
        darkBlue :'#1d2025',
        grayishBlue:'#e5e7eb',
        lightGray:'#b6bcc8',
        lightbox:'#000000bf',
        primary:'#ff7d1a',
        secondary:'#ffede0',


      }
    },
  },
  plugins: [],
}