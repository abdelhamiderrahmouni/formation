/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        lima: {
          50: "#f3faeb",
          100: "#e5f3d4",
          200: "#cde8ae",
          300: "#acd87e",
          400: "#80bf41",
          500: "#6fab37",
          600: "#548828",
          700: "#426823",
          800: "#375321",
          900: "#30481f",
          950: "#17270c",
        },
  
        wattle: {
          50: "#f8faec",
          100: "#eff3ce",
          200: "#e4e99f",
          300: "#d5d95b",
          400: "#d0cf3f",
          500: "#c1ba31",
          600: "#a69528",
          700: "#857023",
          800: "#6f5a24",
          900: "#604c23",
          950: "#372811",
        },
  
        "breaker-bay": {
          50: "#f0fdfb",
          100: "#cdfaf6",
          200: "#9af5ed",
          300: "#60e8e2",
          400: "#2fd2d0",
          500: "#14a6a6",
          600: "#0f8f92",
          700: "#107275",
          800: "#125a5d",
          900: "#144b4d",
          950: "#05292e",
        },
      },
    },
  },
  plugins: [],
};
