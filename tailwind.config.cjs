/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        blackRaisin: "#171717",
        darkerBlackRaisin: "#090909",
        offWhite: "#fafafc",
        lightBlue: "#427D9D",
        liver: "#323232",
      },
      boxShadow: {
        custom:
          "0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)",
        "custom-dark":
          "0 4px 8px rgba(255, 255, 255, 0.01), 0 2px 4px rgba(255, 255, 255, 0.00625)",
        alternate:
          " rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;",
      },
    },
  },
  plugins: [],
};
