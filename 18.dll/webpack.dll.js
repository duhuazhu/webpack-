// 使用dll技术 对某些库 进行单独打包

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露名称
      path: resolve(__dirname, 'dll/manifest.json'),
    }),
  ],
  name: 'production',
};
