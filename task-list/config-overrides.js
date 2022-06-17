const path = require('path');
const { NODE_ENV: mode } = process.env;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const {
  override,
  addBabelPreset,
  addBabelPlugin,
  addWebpackAlias,
} = require('customize-cra');


const overrideConfig = override(
  /* webpack 사용자 정의 구성 덮어쓰기 */
  (config) => {
    /* 개발 모드 */
    if (mode === 'development') {
      
    }

    /* 배포 모드 */
    if (mode === 'production') {
      config.devtool = false;
      config.plugins = [...config.plugins, new SpeedMeasurePlugin()];
    }

    return config;
  },

  addBabelPreset('@emotion/babel-preset-css-prop'),
  addBabelPlugin('@emotion'),

  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);

module.exports = overrideConfig;
