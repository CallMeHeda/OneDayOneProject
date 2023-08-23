/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) rotate(0deg)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) rotate(10deg)'
          }
        },
        rotateDonut: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        rotateWords: {
          '0%': {
            transform: 'rotateZ(-30deg) scale(1)'
          },
          '50%': {
            transform: 'rotateZ(-30deg) scale(1.1)'
          },
          '100%': {
            transform: 'rotateZ(-30deg) scale(1)'
          }
        }
      },
      animation: {
        tilt: 'tilt 1.1s infinite ease-in-out',
        rotateDonut: 'rotateDonut 1s linear infinite',
        rotateWords: 'rotateWords 1s infinite'
      }
    },
    fontFamily: {
      cursive: ['cursive']
    }
  },
  plugins: []
}
