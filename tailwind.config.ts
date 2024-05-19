import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".rounded-t-2\\.5": {
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        },
        ".card": {
          "@apply bg-white dark:bg-black border shadow-sm": {},
        },
        ".card-hover": {
          "@apply active:bg-gray-100 dark:active:bg-gray-800 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-800":
            {},
          "&:hover": {
            "@apply active:shadow-lg sm:shadow-lg": {},
          },
        },
      });
    },
  ],
};
export default config;
