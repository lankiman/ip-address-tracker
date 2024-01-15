/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('assets/images/pattern-bg-mobile.png')",
        desktop: "url('assets/images/pattern-bg-desktop.png')"
      },
      colors: {
        DarkGray: "hsl(0, 0%, 59%)",
        vDarkGray: "hsl(0, 0%, 17%)"
      },
      keyframes: {
        loader: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        dot1: "loader 2s linear infinite",
        dot2: "loader 2s linear infinite 0.3s",
        dot3: "loader 2s linear infinite 0.6s"
      }
    },
    fontFamily: {
      custom: ["Nunito Sans", "sans-serif"]
    }
  },

  plugins: []
};
