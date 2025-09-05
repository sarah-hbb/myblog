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
        slideRight: "slideRight 1s linear infinite",
        slideDown: "slideDown 1s linear infinite",
        slideLeft: "slidLeft 1s linear infinite",
        slideUp: "slideUp 1s linear infinite",
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
        slideRight: {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "100%" },
        },
        slideDown: {
          "0%": { top: "-100%" },
          "50%, 100%": { top: "100%" },
        },
        slidLeft: {
          "0%": { right: "-100%" },
          "50%, 100%": { right: "100%" },
        },
        slideUp: {
          "0%": { bottom: "-100%" },
          "50%, 100%": { bottom: "100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
