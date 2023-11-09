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
        "background-gray": "#3A465C",
        "display": "#2D3645",
        "orange-btn": "#FB8231",
        "white-btn": "#F0F0F0"
      }
    },
  },
  plugins: [],
}
