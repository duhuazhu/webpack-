 const  {resolve} =  require('path');
 const {HtmlWebpackPlugin} = require('html-webpack-plugin');
module.exports  = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
          },{
            test:/\.(jpg|png|gif)$/,
            loader:'url-loader',
            options: {
                // base 64 文件体积更大 (文件请求速度更慢)
                limit: 8 * 1024,
                esModule:false,
                name:'[hash:10].[ext]'
            },
            type: "javascript/auto"
           },{
            test:/\.html$/,
            loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development"
}