var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        libs: './libs.js',
        main: './index.js'
    },
    devServer: {
        disableHostCheck: true,
        contentBase: './dist',
        port: 9099,
        hot: true,
        open: true
    },
    module: {
        rules:[{
            test: /\.(png|jpg|gif|webp)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 5*1024*1024,
                    mimetype: 'image/png'
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js',
    }
};
