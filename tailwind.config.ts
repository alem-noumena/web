import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noumena: {
          // Text and Background colors
          "bg-1": "#000",
          "bg-2": "#fff",
          "bg-3": "#f5f5f5",
          // Accent colors
          "accent-1": "#120A4D",
          "accent-2": "#20127C",
          "accent-3": "#0BD2A2",
          "accent-4": "#FA8B45",
          "accent-5": "#DD2C8D",
          // Legacy aliases for compatibility
          primary: "#120A4D",
          "primary-dark": "#20127C",
          "primary-light": "#20127C",
          secondary: "#000",
          success: "#0BD2A2",
          warning: "#FA8B45",
          error: "#DD2C8D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
