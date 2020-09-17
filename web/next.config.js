const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withPlugins([
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, "public/assets/svg"),
    },
  ],
]);
