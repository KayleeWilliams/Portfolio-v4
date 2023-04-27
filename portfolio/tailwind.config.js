/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-0": "#070307",
        "c-1": "#110810",
        "c-2": "#FFA1F8",
        "c-3": "#3c0838",
        "c-4": "#50424f",
      },
    },
  },
  plugins: [],
};
