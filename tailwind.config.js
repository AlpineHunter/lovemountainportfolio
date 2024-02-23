/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        darkslategray: "#2f4f4f",
        cadetblue: "#5f9ea0",
        darkgreen: "#006400",
        olive: "#808000",
        darkblue: "#00008b",
      },
    },
  },
  plugins: [],
};
