const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname,'build'),
        publicPath: "/",
        chunkFilename: "js/[name]_chunk.js",// 非chunk的名称
        library: '[name]',//讲变量暴露出去 出去的变量名
        // libraryTarget: "window",//将变量添加到window下
        libraryTarget: "commonjs"// 通过commonjs方式暴露
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