import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6EBDD",
        brown: "#2B1810",
        red: "#C8281E",
        orange: "#F28C28",
        yellow: "#FBD38D",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(43, 24, 16, 0.14)",
      },
    },
  },
};

export default config;
