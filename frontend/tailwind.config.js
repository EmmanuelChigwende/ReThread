/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007FFF",
        secondary: "#6F00FF",
        background: "#FFFFFF",

        // for text
        textPrimary:"#007FFF",
        textSecondary:"#6F68CA",
        textDefault: "#FFFFFF"
      },
      fontFamily:{
        sans:["Inter", "sans-serif"],
        heading:["Montserrat","sans-serif"]
      }
    },
  },
  plugins: [],
};
