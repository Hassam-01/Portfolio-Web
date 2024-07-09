/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
       'custom-gradient': 'linear-gradient(0deg, rgba(57, 38, 87, 0.7) 0%, rgba(57, 38, 87, 1) 100%)',
'custom-gradient-dark': 'linear-gradient(0deg, rgba(37, 18, 67, 0.9) 0%, rgba(37, 18, 67, 1) 100%)',
},
fontFamily:{
  'heading': ['Anton SC',' sans-serif']
}
    },
  },
  plugins: [],
}

