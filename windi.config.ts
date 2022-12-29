import { defineConfig } from "windicss/helpers";
export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("windicss/plugin/aspect-ratio")],
});
