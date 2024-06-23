/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        'ratio-625': '62.5%',
      },
      maxWidth: {
        'card-lg': '800px',
      },
      maxHeight: {
        'card-lg': '500px',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
}

