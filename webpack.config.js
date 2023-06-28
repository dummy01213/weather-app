const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module:  {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}