const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        port: 3600,
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
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }],
        }]

    },
    plugins: [
        //html 5 plugin
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}