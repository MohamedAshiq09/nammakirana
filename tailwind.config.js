// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8CC152',
        'primary-dark': '#76B041',
        'primary-light': '#e6f7e6',
        'text-primary': '#333333',
        'text-secondary': '#888888',
      },
    },
  },
  plugins: [],
};