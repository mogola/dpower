const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const SRC_DIR = __dirname + '/';

const paths = [
    '/contact/',
    '/security/'
];
const options_robots = {
    policy: [
        {
            userAgent: "Googlebot",
            allow: "/",
            disallow: ["/search"],
            crawlDelay: 2,
        },
        {
            userAgent: "OtherBot",
            allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
            disallow: ["/admin", "/login"],
            crawlDelay: 2,
        },
        {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/",
        },
    ],
    sitemap: "http://localhost:3000/sitemap.xml",
    host: "http://localhost:3000",
}

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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: SRC_DIR + '/public/index.html',
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            title: "Firstdigital agence digital Web et sécurité"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                REACT_APP_API_URL: JSON.stringify('http://localhost:5555')
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
            name: 'Firstdigital Agence digital',
            short_name: 'FirstDigital App',
            description: 'FirstDigital agence Digital ecommerce, webdesign et sécurité',
            background_color: '#007dfa',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve('src/images/fdfive.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        }),
        new FaviconsWebpackPlugin({
            logo: 'src/images/favicon.ico.png',
            inject: true
        }),
        new RobotstxtPlugin(options_robots),
        new SitemapPlugin('http://localhost:3000', paths)
    ]
});