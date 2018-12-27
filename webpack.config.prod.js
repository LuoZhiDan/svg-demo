const CleanWebpackPlugin = require('clean-webpack-plugin');
// var webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        svgTips: __dirname + '/components/index.js'
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
        new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
        alias: {
            cmp: __dirname + '/app/components',
            mock: __dirname + '/app/public/mock',
            img: __dirname + '/app/public/img',
            libs: __dirname + '/app/public/libs',
            svg: __dirname + '/app/public/svg',
        }
    },
    output: {
        libraryTarget: 'amd',
        library: 'svgTips',
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    }
};
