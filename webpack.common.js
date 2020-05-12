const path = require('path'); // to get the current path

module.exports = {
    entry: ['./src/index.js', './src/scss/home.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-class-properties']
            }
        }]
    },
}
