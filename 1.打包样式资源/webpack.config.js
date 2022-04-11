const {resolve}  = require('path');
module.exports ={
    //入口起点
    entry: './src/index.js',
    //输出
    output: {
        // 输出文件名
        filename: "built.js",
        // 输出路径
        path:resolve(__dirname,'build')
    },
    //loader 得配置
    module: {
        //详细得loader 配置
        rules: [
            {
                //匹配那些文件
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    //plugins的配置
    plugins: [
    ],
    // 模式
    // mode:'development',
    mode:'production'
}