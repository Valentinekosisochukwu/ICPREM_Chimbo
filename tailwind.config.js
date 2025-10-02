/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgdark: "rgb(35, 35, 35)",
        bgleft: "rgb(19, 150, 200, 1)",
        bgright: "rgb(93, 84, 235, 1)"
      },
      backgroundImage: {
        'bgImage': "url('/dist/img/bg-top.png')",
        'bgLeft': "url('/dist/img/left.png')",
        'bgRight': "url('/dist/img/bg_bottom_right.png')"
      },
      boxShadow: {
        blueShadow: ""
      }
    },
  },
  plugins: [],
};
