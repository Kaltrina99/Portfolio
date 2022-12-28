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
      'custom-light':"0 0 5px #16181d",
      'custom-dark':"2px 2px 10px #ca5cdd, -2px -2px 10px #b59641"
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
