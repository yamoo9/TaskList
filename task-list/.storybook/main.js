const path = require('path');
const setRootPath = (_path) => path.resolve(process.cwd(), _path);

module.exports = {
  staticDir: ['../public'],

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],

  framework: '@storybook/react',

  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (
    config,
    { configType /* DEVELOPMENT or PRODUCTION */ }
  ) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    const babelRule = oneOfRule.oneOf.find((rule) =>
      rule.loader?.includes('babel-loader')
    );

    babelRule.options.presets.push('@emotion/babel-preset-css-prop');
    babelRule.options.plugins.unshift('@emotion');

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': setRootPath('src'),
      '@emotion/core': setRootPath('node_modules/@emotion/react'),
      '@emotion/styled': setRootPath('node_modules/@emotion/styled'),
    };

    return config;
  },
};
