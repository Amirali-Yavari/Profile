module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'MainBackground': "url('./public/MyImage/cool-background.png')",
      },
    },
  },
  plugins: [],
};
