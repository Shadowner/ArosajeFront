/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "garden",
      {
        mytheme: {
          primary: "#00a86b",
          secondary: "#6b989e",
          accent: "#E6FAFC",
          neutral: "#6BA368",
          "base-100": "#353D2F",
          "base-200": "#515B3A",
          "base-300": "#596440",
          info: "#9FE7F9",
          success: "#2DD7C9",
          warning: "#F2C821",
          error: "#EA7593",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#00a86b",
          "primary-focus": "#008751",
          secondary: "#2b6cb0",
          "secondary-focus": "#2c5282",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    darkTheme: "mytheme",
    lightTheme: "light",
  },
};
