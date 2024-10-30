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
        primary: {
          DEFAULT: "#3B134E",
          light: "#4D1A66",
          dark: "#2A0E39",
        },
        accent: {
          DEFAULT: "#F5CE48",
          light: "#F7D970",
          dark: "#E5BE38",
        },
      },
    },
  },
  plugins: [],
};

export default config;
