/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5xl': '2.75rem', // A slightly smaller font size for a cleaner look
      },
      lineHeight: {
        'relaxed': '1.75', // Custom relaxed line height
      },
      spacing: {
        '24': '6rem',
        '16': '4rem',
        '12': '3rem',
        '8': '2rem',
        // Define other custom spacing values if needed
      }
    },
  },
  plugins: [],
};