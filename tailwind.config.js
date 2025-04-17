module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBEAEB',
        secondary: '#2F3C7E',
      },
      backgroundImage: {
        'global-bg': "url('../public/back.jpg')",  // Updated path
      },
    },
  },
  plugins: [],
}