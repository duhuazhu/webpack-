const {resolve}  = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path : resolve(__dirname,'build'),
    },
    module: {
        rules: [
            //css
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            //html
            {
                test:/\.html$/,
                loader: "html-loader"
            },
            //图片
            {
                test:/\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name:'[hash:10].[ext]',
                    outputPath:'images'
                },
                type:'javascript/auto'
            },
            //加载icon
            {
                test:/\.ttf|eot|woff2?$/i,
                generator:{
                    filename:"font/[name].[hash:6][ext]"
                },
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        options:true,
        port:3000,
        static:resolve(__dirname,'build'),
        compress: true
    }
}