module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        '5vw': '5vw',
      },
      colors: {
        'secondary': '#0e0e11',
        'primary': '#EB0028',
        'font-primary':'#3d3d3d',
        'font-secondary':'#6d6d6d',
        'white':'#fff'
      },
    },
  },
  plugins: [],
}