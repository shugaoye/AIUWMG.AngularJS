var webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/app',
    // mode: 'development',
    mode: 'production',
    entry: {
        app: './app.js',
        vendor: ['angular', 'jquery']
    },
    target: 'web',
    output: {
        path: __dirname + '/js',
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            }
        ]
   }
};