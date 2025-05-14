// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8CC84B', // Green color from your design
          dark: '#6B9A39',
          light: '#A4D46A',
        },
        secondary: {
          DEFAULT: '#FF9933', // Orange color from your design
          dark: '#E67300',
          light: '#FFAD5C',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};