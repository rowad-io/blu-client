/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', //16px
    },
    extend: {
      screens: {
        '2xl': {'max': '1400px'},
      },
      colors: {
        primaryColor: '',
        secondaryColor: '',
        primaryBgColor: '',
        secondaryBgColor: '',
      },
      fontSize: {
        primary: ['0.875rem', { lineHeight: '1.25rem' }]
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
}
