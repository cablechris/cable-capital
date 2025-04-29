/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-primary': '#FF6B6B',
        'retro-secondary': '#4ECDC4',
        'retro-dark': '#2C3E50',
        'retro-light': '#F7F7F7',
      },
      fontFamily: {
        'pixel': ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
} 