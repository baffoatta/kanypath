/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    // colors: {
    //   primaryColor: '', // example custom color 1
    //   secondaryColor: '#abcdef', // example custom color 2
    // },
    screens: {
      xs: "480px",
      ss: "620px",
      md: "768px",
      
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

