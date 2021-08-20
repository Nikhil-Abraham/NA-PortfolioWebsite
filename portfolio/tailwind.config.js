module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bioColor: "#1f2932",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
