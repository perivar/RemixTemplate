import type { Config } from 'tailwindcss';
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
    logs: false
  },
} satisfies Config;
