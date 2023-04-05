/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("../src/assets/checkmark.png")',
      },
    },
    fontFamily: {
      kalam: ["Kalam", "cursive"],
      acme: ["Acme", "sans-serif"],
      courgette: ["Courgette", "cursive"],
      oswald: ["Oswald", "sans-serif"],
      pt: ["PT Sans Narrow", "sans-serif"],
      shadows: ["Shadows Into Light", "cursive"],
      signika: ["Signika", "sans-serif"],
      ubuntu: ["Ubuntu Condensed", "sans-serif"],
    },
  },

  plugins: [require("daisyui")],
};
