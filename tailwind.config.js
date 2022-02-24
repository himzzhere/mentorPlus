module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "400px",
      desktop: "992px",
    },

    extend: {
      colors: {
        secondaryBackground: "#fafafa",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
