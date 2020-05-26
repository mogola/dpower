const path = require('path'); // to get the current path

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].main.js',
        publicPath: '/',
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
