export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        dark: "#0F172A",
        soft: "#F8FAFC",
      },
        fontFamily: {
       body: ["Manrope", "system-ui", "sans-serif"],
        heading: ["Geist", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
