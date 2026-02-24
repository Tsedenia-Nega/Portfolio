/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dusty-rose": "#C0A9BD",
        "slate-mist": "#94A7AE",
        "off-white": "#F4F2F3",
      },
    },
  },
  plugins: [],
};
