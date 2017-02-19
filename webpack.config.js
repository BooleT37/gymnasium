var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var argv = require('yargs').argv;

module.exports = {
    entry: {
        index: './src/main/js/app/app.js',
        tablePage: './src/main/js/admin/table/tablePage.js'
    },
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: 'src/main/resources/static/built/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader?sourceMap=1"
                )
            },
            {
                test: /\.(png|ttf|otf|eot|svg|woff)$/,
                loader: "url-loader?limit=100000&name=[name].[ext]&publicPath=../images/file-loader/&outputPath=src/main/resources/static/images/file-loader/",
            },
            {
                test: /\.jpg$/,
                loader: "file-loader?name=[name].[ext]&publicPath=../images/file-loader/&outputPath=src/main/resources/static/images/file-loader/"
            },

        ],
    },
    plugins: [
        new ExtractTextPlugin("src/main/resources/static/built/[name].css"),
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': argv.debug === 'true'
            }
        })
    ]
};