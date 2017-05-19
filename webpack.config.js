const path = require('path');

const distDir = path.resolve(__dirname, 'dist');

const webpackConfigs = {
  entry: {
    'main': './main.js',
  },
  output: {
    path: distDir,
    publicPath: '/dist',
    filename: '[name].js',
  },
};

module.exports = webpackConfigs;
