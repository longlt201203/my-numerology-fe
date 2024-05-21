/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepPurple: '#5D3A9B',
        lavender: '#CAB9FF',
        softGold: '#E9D985',
        midnightBlue: '#2C3E50',
        crystalWhite: '#F0F8FF',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif'],
        secondary: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

