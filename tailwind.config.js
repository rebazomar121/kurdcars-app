/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./src/**/*.tsx", "./App.tsx", "./nativewind.config"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}
