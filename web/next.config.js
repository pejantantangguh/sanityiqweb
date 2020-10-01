const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const optimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withPlugins([
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, "public/assets/svg"),
    },
  ],
  [
    optimizedImages,
    {
      optimizeImagesInDev: false,
    },
  ],
]);
