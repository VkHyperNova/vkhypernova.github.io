/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // for ThemeToggle
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: "#3C6CA0",
        dark: "#2F547D",
        light: "#7FA6D4",
      },
    },
  },
},
  plugins: [],
};
