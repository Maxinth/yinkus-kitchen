/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        "hero-banner": "url('/src/assets/home-banner.png')",
      },
    },
  },
  plugins: [],
};
