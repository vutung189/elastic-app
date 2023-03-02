// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require("path");
const BASE_DIR = join(__dirname, "src");
const VUE_FILE = join("**", "*.vue");

const config = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: true,
    content: [join(BASE_DIR, VUE_FILE), join(__dirname, "*.html")],
  },
  theme: {
    fontFamily: {
      rza: ["Rza,Rza-fallback"],
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "dark-green": "#13544e",
        success: "#4caf50",
        "secondary-custom": "#e4ebe4",
      },
      bg: { "secondary-custom": "#e4ebe4" },
    },
  },
  variants: {},
  plugins: [],
};

module.exports = config;
