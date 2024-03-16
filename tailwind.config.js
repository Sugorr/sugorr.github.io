/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
          'default-shadow': '0px 0px 15px 0px',
        },
        colors: {
          'default-black' : '#12161E',
          'default-orange': '#FA8015',
          'default-blue': '#19C2F0',
          'default-white': '#F1ECEC',
        },
        fontFamily: {
          'karla': ['Karla', 'sans-serif'],
          'quicksand': ['Quicksand', 'sans-serif'],
        },
        blur: {
          'max': '100px',
        },
        backgroundImage: {
          'web-1': "url('/src/assets/objects/ebike.png')",
          'web-2': "url('/src/assets/objects/snail.png')",
          'web-3': "url('/src/assets/objects/bee_hotel.png')",
          'web-4': "url('/src/assets/objects/garden_1.png')",
          'web-5': "url('/src/assets/objects/garden_2.png')",
          'web-6': "url('/src/assets/objects/shelter_1.png')",
          'web-7': "url('/src/assets/objects/human.png')",
          'web-8': "url('/src/assets/objects/kubo.png')",

          'game-1': "url('/src/assets/games/birdio.png')",
          'game-2': "url('/src/assets/games/knock.png')",
          'game-3': "url('/src/assets/games/grab.png')",
          'game-4': "url('/src/assets/games/mage.png')",
          'game-5': "url('/src/assets/games/pie.png')",
        }
      },
  },
  plugins: [],
}