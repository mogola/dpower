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
const ImageminPlugin = require('imagemin-webpack-plugin').default
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        historyApiFallback: true,
        hot: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            })
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        runtimeChunk: {
            name: 'runtime'
        }
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
                }]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            ]
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
            removeScriptTypeAttributes: false,
            removeStyleLinkTypeAttributes: false,
            useShortDoctype: true,
            title: "Firstdigital agence digital Web et sécurité",
            base: '/',
            url: 'http://localhost:5555',
            minify: {
                minifyJS: true,
                minifyCSS: true
            },
            hash: false
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
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
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
            theme_color:'#007dfa',
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