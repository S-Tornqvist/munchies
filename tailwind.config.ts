import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "639.999px" },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "off-white": "#fafafa",
        black: "#000000",
        "off-black": "#1c1c1c",
        green: "#00703a",
        stroke: "rgba(0, 0, 0, 0.1)",
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.stroke", "currentColor"),
      }),
    },
  },
  plugins: [],
};
export default config;
