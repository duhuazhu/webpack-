const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry: './src/index.js',
    output: {
        filename: "built.js",
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
        })
    ],
    mode: "development"
}