/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-primary)"],
        heading: ["var(--font-secondary)"],
        mono: ["var(--font-write)"],
      },
    },
  },
  plugins: [],
};
