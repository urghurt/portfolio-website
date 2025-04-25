/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans-serif'],
      },
      colors: {
        'background': '#0C0E16', // Dark blue background from case study viewer
        'card-bg': '#151622',    // Case study card background
        'orb-red': '#ff9e98',
        'orb-green': '#98efab',
        'orb-blue': '#869de5',
        'orb-pink': '#f9447f',
        'orb-yellow': '#ffd875',
        'text-secondary': '#B0B6CB', // Gray text from case study cards
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #ffd875, #ff9e98, #f9447f, #869de5, #98efab)',
      },
    },
  },
  plugins: [],
};
