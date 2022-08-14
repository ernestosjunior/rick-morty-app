/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        40: "40px",
        card: "273px",
      },
      height: {
        60: "60px",
      },
      minHeight: {
        card: "500px",
      },
      colors: {
        "red-color": "#fb4e5f",
        "dark-color": "rgb(51, 51, 51)",
        "orange-color": "rgb(255, 152, 0)",
      },
      borderRadius: {
        20: "20px",
      },
      boxShadow: {
        card: "0px 2px 4px 2px rgba(0, 0, 0, 0.1)",
      },
      backgroundColor: {
        statusGreen: "rgb(85, 204, 68)",
        statusRed: "rgb(214, 61, 46)",
      },
    },
  },
  plugins: [],
};
