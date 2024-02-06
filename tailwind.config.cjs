/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816" ,
        secondary: "#aaa6c3" ,
        tertiary: "#151030" ,
        "black-100": "#100d25" ,
        "black-200": "#090325" ,
        "white-100": "#f3f3f3" 
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(33, 30, 53, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};