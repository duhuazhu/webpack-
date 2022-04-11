const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    'style-loader',
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
       )
    ],
    mode: "development"
}