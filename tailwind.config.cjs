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
        sans:  ["Inter Tight", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "ui-serif", "Georgia", "serif"],
        mono:  ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        /* Legacy aliases kept so no old Tailwind class breaks hard */
        blackRaisin:       "#171717",
        darkerBlackRaisin: "#090909",
        offWhite:          "#fafafc",
        lightBlue:         "#427D9D",
        liver:             "#323232",

        /* New design-token colours (bridged through CSS vars) */
        bg:    "var(--bg)",
        bg2:   "var(--bg-2)",
        bg3:   "var(--bg-3)",
        ink:   "var(--ink)",
        ink2:  "var(--ink-2)",
        ink3:  "var(--ink-3)",
        rule:  "var(--rule)",
        rule2: "var(--rule-2)",
        card:  "var(--card)",
        accent:"var(--accent)",
      },
      boxShadow: {
        custom:
          "0px 6px 24px 0px rgba(0,0,0,0.05), 0px 0px 0px 1px rgba(0,0,0,0.08)",
        "custom-dark":
          "0 4px 8px rgba(255,255,255,0.01), 0 2px 4px rgba(255,255,255,0.00625)",
      },
    },
  },
  plugins: [],
};
