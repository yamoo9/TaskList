const { filterTokensByType } = require('./fns');
const tokens = require('./theme/tailwind/light.json');
const colors = filterTokensByType('color', tokens);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./tailwind-demo/**/*.{html,js}', './components/**/*.{html,js}'],
  darkMode: 'media',
  theme: {
    colors,
  },
};
