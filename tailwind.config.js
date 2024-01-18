/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

