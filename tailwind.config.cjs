/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        90: "90%",
      },
      screens: {
        mobile: "900px",
        "tablet-desktop": "1000px",
      },
      colors: {
        yellowCustom: "#edca54",
        orangeCustom: "#e97d05",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
