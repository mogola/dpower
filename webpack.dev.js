const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = __dirname + '/';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(scss|css|sass)$/,
            use: [
                MiniCssExtractPlugin.loader
                , {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                },]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/public/index.html',
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                REACT_APP_API_URL: JSON.stringify('http://localhost:5555')
            }
        })
    ]
});