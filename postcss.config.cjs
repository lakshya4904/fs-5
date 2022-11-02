const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("autoprefixer"),
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
