/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    boxShadow:{
      'custom-light':"0 0 5px #65b0c7",
      'custom-dark':"5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        // ...
        blueCS: {
          light: '#bcc5f7',
          DEFAULT: '#7680B5',
          dark: '#353c61',
        },
        yellowCS:{
          DEFAULT:'#b59641'
        },
        dark:{
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          400: "#1d1f24",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
    variants: {
      extend: {
        boxShadow: ["dark"],
      },
    },
    plugins: [],
  }
}
