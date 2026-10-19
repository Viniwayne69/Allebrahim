import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EE",
        brown: "#002D3C",
        red: "#831417",
        orange: "#DF9226",
        yellow: "#F2C27A",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 45, 60, 0.14)",
      },
    },
  },
};

export default config;
