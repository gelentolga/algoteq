/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json", "./assets/css/*.css", "./assets/**/*.js"],

  theme: {
    extend: {
      backgroundImage: {
        "background-landing-three": "url('/images/bg-picture-4.jpg')",
      },
      animation: {
        "gradient-text": "gradientText 3s ease infinite",
      },
      keyframes: {
        gradientText: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
