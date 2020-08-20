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
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const SRC_DIR = __dirname + '/';
const colorTheme= '#11387A';
const prodftp = true

let envUrl = 'http://localhost:3000'
let facebookID = "346366339715645"

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
    sitemap: envUrl + "/sitemap.xml",
    host: envUrl,
}

console.log(process.env.ND)


module.exports = function (env) {
    console.log(env.ND, 'env.ND')
    if (env.ND === 'dev') {
        return merge(common, {
            mode: 'development',
            devtool: 'inline-source-map',
            devServer: {
                contentBase: path.join(__dirname, 'distdevelopment'),
                port: 3000,
                historyApiFallback: true,
                hot: true
            },
            output: {
                path: path.resolve(__dirname, 'distdevelopment'),
                filename: '[name].main.js',
                publicPath: '/',
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
                    chunks: 'all',
                    minSize: 0,
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
                new FixStyleOnlyEntriesPlugin(),
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin({
                    assetNameRegExp: /\.optimize\.css$/g,
                    cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: ['default', { discardComments: { removeAll: true } }],
                    },
                    canPrint: true
                }),
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin({
                    inject: true,
                    cache: true,
                    scriptLoading: 'defer',
                    template: SRC_DIR + '/public/index.html',
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                    title: "OnFirstdigital agence digital Web et sécurité",
                    base: '/',
                    url: envUrl,
                    minify: {
                        minifyJS: true,
                        minifyCSS: true
                    },
                    hash: false,
                    ga_property_id: 'UA-106502299-3',
                    facebook_id: facebookID,
                    imageFb : path.resolve('src/images/logo_fb_app.png')
                }),
                new HtmlWebpackPartialsPlugin({
                    path: 'analytics.html',
                    location: 'head',
                    priority: 'high'
                }),
                new PreloadWebpackPlugin({
                    rel: 'preload',
                    include: 'asyncChunks'
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
                    name: 'OnFirstdigital Agence digital',
                    short_name: 'OnFirstDigital App',
                    description: 'OnFirstDigital agence Digital ecommerce, webdesign et sécurité',
                    background_color: colorTheme,
                    theme_color: colorTheme,
                    inject: true,
                    fingerprints: true,
                    ios: true,
                    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
                    icons: [
                        {
                            src: path.resolve('src/images/fdfive.png'),
                            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                        },
                        {
                            src: path.resolve('src/images/fdfive.png'),
                            size: '1024x1024',
                            purpose: 'maskable'
                        },
                        {
                            src: path.resolve('src/images/fdfive.png'),
                            sizes: [120, 152, 167, 180, 1024],
                            destination: path.join('icons', 'ios'),
                            ios: true
                          },
                        {
                            src: path.resolve('src/images/fdfive.png'),
                            size: 1024,
                            destination: path.join('icons', 'ios'),
                            ios: 'startup'
                        }
                    ]
                }),
                new FaviconsWebpackPlugin({
                    logo: 'src/images/favicon.ico.png',
                    inject: true
                }),
                new RobotstxtPlugin(options_robots),
                new SitemapPlugin(envUrl, paths)
            ]
        })
    }
}