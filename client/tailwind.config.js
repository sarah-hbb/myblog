/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      spacing: {
        "5%": "5%",
      },
      width: {
        "burger-diag": "2.12132034356rem",
      },
      animation: {
        reveal: "reveal 500ms ease-in-out",
        dropdown: "dropdown 300ms ease-in-out",
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
        dropdown: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
