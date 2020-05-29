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
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    sitemap: "https://firstdigital.herokuapp.com/sitemap.xml",
    host: "https://firstdigital.herokuapp.com",
}

module.exports = {
    mode: 'production',
    entry: { main: __dirname + '/src/index.js' },
    devServer: {
        contentBase: './', // where dev server will look for static files, not compiled
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
        }
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
                            minimize: true
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new CompressionPlugin({
            cache: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["public/*.*", "css/*.*", "js/*.*"],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            title: "Firstdigital agence digital Web et sécurité",
            base: 'https://firstdigital.herokuapp.com',
            url: 'https://firstdigital.herokuapp.com',
            minify: {
                minifyJS: true,
                minifyCSS: true
            },
            hash: false
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
            theme_color: '#007dfa',
            background_color: '#007dfa',
            start_url: '.',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
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
        }),
        new RobotstxtPlugin(options_robots),
        new SitemapPlugin('https://firstdigital.herokuapp.com', paths)
    ]
};