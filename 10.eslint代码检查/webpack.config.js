const {resolve} =  require('path');
const HtmlWebpackPlugin  =  require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports ={
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
 /*           {
                test:/\.js$/,
                // 需要下载插件eslint-loader  eslint
                // 还有检查规则的插件  eslint-config-airbnb-base  eslint-plugin-import -D
                //排除node_modules包,
                exclude: /node_moodules/,
                loader:'eslint-loader',
                options: {
                    fix:true
                }
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        // node 12 会报错 切换到node14使用 nvm list 查看  nvm use 14 使用
        new ESLintPlugin(
            {
                fix:true, // 自动修复不合理的写法
                exclude:'node_modules',
            }
        ),
    ],
    mode:'development'
}