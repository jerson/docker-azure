/* eslint-disable */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "babel-polyfill",
        "./index"
    ],
    output: {
        path: path.join(__dirname, "docs"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.prod.html',
            inject: true
        }),
    ],
    module: {
        loaders: [{
            test: /\.md$/,
            loader: "html-loader!markdown-loader?gfm=false"
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192"
        }, {
            test: /\.svg$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }]
    }
};
