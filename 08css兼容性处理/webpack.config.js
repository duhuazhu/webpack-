const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  MiniCssExtractPlugin  = require('mini-css-extract-plugin')
// 设置node环境变量

// process.env.NODE_ENV = 'development'


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
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            ident:'postcss',
                            plugins: ()=>[
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ],
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
            filename:'built.css'
        })
    ],
    mode: "development"
}
