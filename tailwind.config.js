/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "logoBlue": "#122c91",
        "buttonBlue": "#0000ff"
      },
      
    },
  },
  plugins: [],
}

