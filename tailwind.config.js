/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        sand: {
          light: '#E4E0E1',
          DEFAULT: '#D6C0B3',
          dark: '#AB886D',
        },
        brown: {
          light: '#AB886D',
          DEFAULT: '#493628',
        },
        darkbrown: '#493628',
        tan: '#D6C0B3',
        offwhite: '#E4E0E1',
      },
    },
  },
  plugins: [],
}

