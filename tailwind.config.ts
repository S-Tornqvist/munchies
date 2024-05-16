

import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "off-white": "#fafafa",
      black: "#000000",
      "off-black": "#101010",
      green: "#00703a",
      stroke: "rgba(0, 0, 0, 0.1)",
    },
    borderColor: ({theme}) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.stroke", "currentColor"),
    }),
  },
  plugins: [
    function ({addComponents}: any) {
      addComponents({
        '.card': {
          '@apply bg-white dark:bg-black border': {},
        }
      })
    }
  ],
};
export default config;
