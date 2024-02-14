/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "header":"#e7f4fb",
        "button":"#1090D8",
        "h3":"#414141",
      }
    },
    container:{
      center:true,
      padding:{
        default:'20px',
        md:'50px',
      }
      
    }

  },
  plugins: [],
}

