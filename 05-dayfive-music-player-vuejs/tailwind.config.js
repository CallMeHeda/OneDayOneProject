/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        33: '33rem'
      },
      minHeight: {
        '90vh': '90vh'
      }
    }
  },
  plugins: []
}
