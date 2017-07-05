const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.config.js')

config.entry.push('webpack-hot-middleware/client?reload=true')
config.devtool = 'source-map'

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
		filename: 'styles.min.css',
		allChunks: true,
        disable: true
	}),
    new HtmlWebpackPlugin({
        template: './index.template.html',
        inject: 'body',
        filename: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
];

module.exports = config
