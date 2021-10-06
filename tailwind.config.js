module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      primary: "#0D0C35",
      secondary: "#9467DC",
    }),
    textColor: {
      primary: "#9467DC",
      secondary: "#9CA3AF",
      tertiary: "#eeeeef",
      four: "#6B7280",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      b: "#9467DC",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
