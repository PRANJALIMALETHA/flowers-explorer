/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(34, 197, 94, 0.6)', // Example with green shadow
      },
    },
  },
  plugins: [],
}
