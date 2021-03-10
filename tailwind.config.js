module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'inputs': '#4f4b5a',
     }),
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      fontSize: ['hover']
    },
  },
  plugins: [],
}
