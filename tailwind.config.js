/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    content: ["./src/pages/*.html"],
  },
  theme: {
    screens: {
      
      // mobile
      'xs': '475px',

      // tablet
      'sm': '640px',
      'md': '768px',
      
      //desktop
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '1950px',

    },
    extend: {
      colors: {
        indigo: "#6F88FC",
        indigoDark: "#627ADE",
        lightBlue:'#5a99fe33',
        borderBlue:'#8de1fe',
        borderGray:'#324d784d',
      },
      spacing: {
        '100':'27rem',
        '104': '30rem',
        '120': '40rem',
      },
      borderWidth: {
        '40': '40px',
      }
  
  
    },
  },
  plugins: [],
};
