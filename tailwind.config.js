/** @type {import('tailwindcss').Config} */

import { ColorPallet } from "./src/constant";

const safelistedStyled = ColorPallet.flatMap((color) => {
  return [
    `bg-${color}-500`,
    `bg-${color}-600`,
    `hover:bg-${color}-600`,
    `outline-${color}-600`,
  ];
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: safelistedStyled,
  plugins: [],
};
