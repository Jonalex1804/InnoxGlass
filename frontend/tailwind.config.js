/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33cabe",
        secondary: "#3380be",
        background: "#f9fafb",  // color para bg-background
        foreground: "#111827",  // color para text-foreground
        border: "#d1d5db",      // color para border-border
      },
    },
  },
  plugins: [],
}
