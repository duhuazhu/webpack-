const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


//hash  chunkhash contenthash  三种hash值

//tree_shaking  去掉没有用的代码
//1.必须只用es6环境 2.开启production

//"sideEffects": ["*.css"]  代码没有副作用 排除css
module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.ttf|eot|woff2?$/i,
        generator: {
          filename: 'font/[name].[hash:6][ext]',
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          // base 64 文件体积更大 (文件请求速度更慢)
          limit: 8 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
        },
        type: 'javascript/auto',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: {
                version: 3,
              },
              targets: {
                chrome: '60',
                firefox: '50',
                ie: '9',
                safari: '10',
                edge: '17',
              },
            },
            ],
          ],
          cacheDirectory:true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        removeComments: true,
      },
    }),
      // 增加hash值 .[hash:10]
    new miniCssExtractPlugin(
      {
        filename: 'css/built.[contenthash:10].css',
      },
    ),
    new optimizeCssAssetsWebpackPlugin(),
    new ESLintPlugin(
      {
        fix: true, // 自动修复不合理的写法
        exclude: 'node_modules',
      },
    ),
  ],
  mode: 'development',
  devServer: {
    static: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 热更新
    hot: true,
  },
  devtool:'source-map',
  // inline-source-map
  // eval-source-map
  // nosources-source-map
  // cheap-source-map

};
