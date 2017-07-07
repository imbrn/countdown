const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === "production";
const development = process.env.NODE_ENV === "development";

const extractSass = new ExtractTextPlugin({
    filename: "[name].min.css",
    disable: development
})

module.exports = {
    devtool: "cheap-module-source-map",
    entry: {
        main: './src/app.js',
        vendor: ['material-design-lite']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.mp3$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.html$/,
                use: [ 'html-loader' ]
            }
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: './src/app.html'
        }),
    ]
}
