module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        port: 7777,
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
}
