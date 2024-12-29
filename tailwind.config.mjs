/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        brand: "var(--brand)",
        "brand-light": "var(--brand-light)",
        "primary-content": "var(--primary-content)",
        "secondary-content": "var(--secondary-content)",
      },
    },
  },
  plugins: [],
};
