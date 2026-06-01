import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        azure: "#0078D4"
      }
    }
  },
  plugins: []
} satisfies Config;