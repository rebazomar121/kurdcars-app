/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./web/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#573CDA",
        flatGray: "#9BA3AF",
      },
    },
  },
  plugins: [],
};
