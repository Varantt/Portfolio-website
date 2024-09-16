/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Removed the font feature settings
      },
      colors: {
        blackRaisin: "#171717",
        offWhite: "#fafafc",
        lightBlue: "#427D9D",
        liver: "#323232",
      },
    },
  },
  plugins: [],
};
