const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  MiniCssExtractPlugin  = require('mini-css-extract-plugin')
module.exports  = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test:/\.ttf|eot|woff2?$/i,
                generator:{
                    filename:"font/[name].[hash:6][ext]"
                }
            },
            {
                test:/\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
       new HtmlWebpackPlugin(
           {
               template:'./src/index.html'
           }
       ),
        new MiniCssExtractPlugin({
            filename:'css/built.css'
        })
    ],
    mode: "development"
}