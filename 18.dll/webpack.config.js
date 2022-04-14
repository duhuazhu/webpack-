const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack  = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
module.exports={
    entry: './src/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        //创建空的html 自动引入(js/css)资源
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname,'dll/manifest.json')
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath:resolve(__dirname, 'dll/jquery.js')
        })
    ],
    mode: "production"
}