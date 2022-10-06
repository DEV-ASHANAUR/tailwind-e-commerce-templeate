/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    container:{
      center: true,
      padding : "1rem",
    },
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif"
      },
      colors:{
        'primary':'#FD3D57'
      },
    },
  },
  variants:{ 
    extends:{
      // display:['group-hover'],
      // visibility:['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
