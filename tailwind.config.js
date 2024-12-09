/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FE9E12",
        "start": '#121744',
        "end": '#2D3AAA',
      },
    },
  },
  plugins: [],
};
