/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-purple-white":
          "linear-gradient(to bottom, #673AB7 200px, #ffffff 0)",
      },
    },
  },
  plugins: [],
};
