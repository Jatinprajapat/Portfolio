/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./HTML/index.html'],
  theme: {
    extend: {
      fontFamily:{
        'GoogF': ['Jaro','sans-serif'],
      },
      backgroundImage:{
        'CardGradient':'linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))',
        'TextGradient':'linear-gradient(90deg,#b0f3f1,#ffcfdf)',
      }
    },
  },
  plugins: [],
}

