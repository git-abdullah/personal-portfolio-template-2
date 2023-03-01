/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-60': '#222831',
        'primary-10': '#FFD369',
        'primary-30': '#EEEEEE'
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
