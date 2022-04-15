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
    mode: "development",
    resolve: {
        //配置解析模块的别名:写路径的时候可以简写
        alias: {
            $css:resolve(__dirname,'src/css')
        },
        //配置省略路径的后缀名的规则
        extensions: [
            '.js','.json'
        ],
        //告诉webpack 解析模块的规则 应该去哪个目录找
        modules: [
            'node_modules',
            // resolve(__dirname,'../../node_modules')
        ]
    }
}