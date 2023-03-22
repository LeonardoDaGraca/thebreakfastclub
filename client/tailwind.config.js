/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous"],
        oswald: ["Oswald"],
        ubuntu: ["Ubuntu"],
        exo2: ["Exo+2"],
      },
    },
  },
  plugins: [],
};
