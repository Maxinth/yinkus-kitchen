/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      pattern: { max: "500px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      backgroundImage: {
        "hero-banner": "url('/src/assets/home-banner.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        irishGrover: ["Irish Grover", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
