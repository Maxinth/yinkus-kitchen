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
        "clients-banner": "url('/src/assets/snapshot-bg.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        irishGrover: ["Irish Grover", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate3d(0, 0, 1, 0deg)",
          },
          "25%": {
            transform: "rotate3d(0, 0, 1, 90deg)",
          },
          "50%": {
            transform: "rotate3d(0, 0, 1, 180deg)",
          },
          "75%": {
            transform: "rotate3d(0, 0, 1, 270deg)",
          },
          "100%": {
            transform: "rotate3d(0, 0, 1, 360deg)",
          },
        },
      },
      animation: {
        "rotate-dish": "rotate 10s linear infinite",
      },
    },
  },
  plugins: [],
};
