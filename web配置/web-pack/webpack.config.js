const path=require("path")
const HtmlWebpackPlugin=require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const isDev = process.env.NODE_ENV ==='development'
const config={
    entry:path.join(__dirname,'src/index.js'),
    output:{
        /* 打包的文件名 */
        filename:"[hash]-[name]-bundle.js",
        /* 打包文件的输出目录 */
        path:path.join(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"webpack打包"
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
            },{
                test:/\.vue$/,
                use:'vue-loader'
            },{
                test:/\.png|jpg|gif$/i,
                use:"file-loader"
            }
        ]
    },
    mode:"development"
}
if(isDev){
    config.devServer = {
        port:8080,
        host:'localhost',
        overlay:{
            errors:true
        },
        hot:true
    }
}
module.exports = config