const path = require('path');

module.exports = {
  "stories": [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src/"),
      '@icons': path.resolve(__dirname, "../src/assets/icons"),
      '@components': path.resolve(__dirname, "../src/components"),
      '@utils': path.resolve(__dirname, "../src/utils"),
      '@assets': path.resolve(__dirname, "../src/assets"),
      '@data': path.resolve(__dirname, "../src/data"),
    };
    return config;
  }
}
