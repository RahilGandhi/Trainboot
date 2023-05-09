/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121217",
        "blue-primary": "#102844",
        "blue-secondary": "#E9EDFF",
        "grey-primary": "#F1F0F0",
        "grey-secondary": "#767278",
        "orange-primary": "#FF7800",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
