/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        "primary": "hsl(26, 100%, 55%)",
        "secondary": "hsl(25, 100%, 94%)",
        "dark-blue": "hsl(220, 13%, 13%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "white": "hsl(0, 0%, 100%)",
        "black": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
}