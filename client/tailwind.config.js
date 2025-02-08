/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "5%": "5%",
      },
      width: {
        "burger-diag": "2.12132034356rem",
      },
      animation: {
        reveal: "reveal 500ms ease-in-out",
      },
      keyframes: {
        reveal: {
          "0%": {
            transform: "scaleY(0.005) scaleX(0)",
          },
          "50%": {
            transform: "scaleY(0.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(1) scaleX(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
