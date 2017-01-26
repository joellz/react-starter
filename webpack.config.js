const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const css = (process.env.NODE_ENV === 'production' ? 'css-loader' : 'css-loader?sourceMap')

module.exports = {
    resolve: {
        modules: ['node_modules', 'components', 'src'],
        extensions: ['.js', '.jsx']
    },

    entry: [
        './src/index.jsx'
    ],

    output: {
        path: `${__dirname}/build/`,
        filename: "bundle.js",
        publicPath: "/build/"
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    module: {
        rules: [
            {
                test: /\.js.*$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', css, 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', css, 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(otf|svg|eot|woff|woff2|ttf|jpg|png|gif)$/,
                use: ['url-loader']
            }
        ]
    }
}
