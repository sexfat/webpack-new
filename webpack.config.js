const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// style inline html
module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    //兩個進入口
    entry: {
        app: './src/index.js'
        // app01 :  './src/about.js'
    },
    devServer: {
        contentBase: './dist',
        port: 3004,
        open: true
    },
    output: {
        filename: 'bundle.js',
        //  檔案要去哪  gulp 是用pipe
        path: path.resolve(__dirname, 'dist') // __dirname 檔案名稱
    },
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist'
                    }
                },
                'css-loader',
                'sass-loader'
            ],
        }]

    },
    plugins: [
        //html 5 plugin
        new HtmlWebpackPlugin({
            title: '我的首頁',
            filename: 'index.html', //默認產生的首頁 index.html
            template: './src/index.html' //我們參考的首頁
        }),
        new HtmlWebpackPlugin({
            title: '關於我們',
            filename: 'aboutus.html', //默認產生的首頁 index.html
            template: './src/aboutus.html' //我們參考的首頁
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css"
        })
    ]
}