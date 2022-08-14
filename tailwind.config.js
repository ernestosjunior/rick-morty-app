/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        40: "40px",
      },
      height: {
        60: "60px",
      },
      colors: {
        "red-color": "#fb4e5f",
        "dark-color": "rgb(51, 51, 51)",
        "orange-color": "rgb(255, 152, 0)",
      },
    },
  },
  plugins: [],
};
