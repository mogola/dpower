// webpack v4
const path = require('path');// update 23.12.2018
//const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: { main: __dirname + '/src/index.js' },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // where dev server will look for static files, not compiled
        publicPath: '/', //relative path to output path where  devserver will look for compiled file
        hot: true,
        open: true,
        historyApiFallback: true
    },
    devtool: "source-map",
    target: "web",
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
            title: "First digital PWA"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                REACT_APP_API_URL: JSON.stringify('https://calm-headland-49450.herokuapp.com'),
                PUBLIC_URL: JSON.stringify('https://firstdigital.herokuapp.com')
            }
        }),
        new WriteFilePlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/images', to: 'images' }
            ],
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 100000000
        }),
        new WebpackPwaManifest({
            filename: "manifest.json",
            name: 'My Progressive Web App',
            short_name: 'MyPWA',
            description: 'My awesome Progressive Web App!',
            theme_color: '#007dfa',
            background_color: '#007dfa',
            scope: "/",
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            start_url: './?source=pwa',
            icons: [
                {
                    src: path.resolve('src/images/fdfive.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/favicon.ico.png',
            inject: true
        })
    ]
};