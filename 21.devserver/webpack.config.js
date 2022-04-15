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
    },
    devServer: {
        //  运行代码的目录
        contentBase:resolve(__dirname,'build'),
        watchContentBase:true, //监视目录上所有文件 有变化就重新加载
        watchOptions:{
            //忽略文件
            ignored:/node_modules/
        },
         // 启动gzip压缩
        compress:true,
        //端口号
        port:5000,
        //域名
        host:'localhost',
        //自动打开游览器
        open: true,
        //开启HRM功能,
        hot:true,
        //不要启动服务器的日志信息
        clientLogLevel:'none',
        // 除了一些基本的启动信息以外 都不要启动
        quiet:true,
        //如果出错了 不要全屏提示
        overflow:false,
        //解决开发环境下 服务器跨域问题
        proxy:{
            'api/':{  //将服务器的请求转发到3000中
                target:'http://loaclhost:3000',
                //发送请求时,请求路径重写:将/api/xxx --->/xxx (去掉/api)
                pathRewrite:{
                    '^api':''
                }
            }
        }
    }
}