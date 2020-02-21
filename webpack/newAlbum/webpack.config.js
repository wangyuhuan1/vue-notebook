const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV == 'development'
const {VueLoaderPlugin} = require('vue-loader');
const config = {
    entry: path.join(__dirname, 'src/index.js'), //要打包的文件
    output: {
        /* 打包成的文件名 */
        filename: "bundle.js",
        /* 打包的目录 */
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack测试"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.png|jpg|gif$/i,
                use:'file-loader'
            }
        ]
    },
    mode: "development"
}
if(isDev){
    config.devServer ={
        host:'localhost',
        port:8080,
        /* 错误是否显示在界面上 */
        overlay:{
            errors:true
        },
        /* 是否进行热更新 */
        hot:true
    }
}
module.exports = config