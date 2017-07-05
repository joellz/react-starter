const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const css = (process.env.NODE_ENV === 'production' ? 'css-loader' : 'css-loader?sourceMap')

module.exports = {
    resolve: {
        modules: ['node_modules', 'components', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    entry: [
        './src/index.tsx'
    ],

    output: {
        path: `${__dirname}/build/`,
        filename: "bundle.js",
        publicPath: "/"
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
    		filename: 'styles.min.css',
    		allChunks: true
    	}),
        new HtmlWebpackPlugin({
            template: './index.template.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: { loader: 'awesome-typescript-loader', options: { useCache: true } }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        css, 'postcss-loader', {
                            loader: 'sass-loader',
                            options: {
                                data: "@import '~sass/global';",
                                includePaths: ['/src/sass/_global.scss']
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(otf|svg|eot|woff|woff2|ttf|jpg|png|gif)$/,
                use: ['url-loader']
            }
        ]
    }
}
