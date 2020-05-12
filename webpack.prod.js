// webpack v4
const path = require('path');// update 23.12.2018
//const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: { main: __dirname + '/src/index.js' },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // where dev server will look for static files, not compiled
        publicPath: '/', //relative path to output path where  devserver will look for compiled file
        hot: true,
        open: true,
        historyApiFallback: true
    },
    devtool: "source-map",
    target: "web",
    externals: ['umd'],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', 'css', 'sass'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                            reloadAll: true,
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["public/*.*", "css/*.*", "js/*.*"],
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './public/index.html',
            filename: 'index.html',
        })
    ]
};