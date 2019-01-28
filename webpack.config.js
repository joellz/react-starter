const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    modules: [ 'node_modules', 'components', 'src', 'styles', 'config', 'assets' ],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  mode: process.env.NODE_ENV,

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    hotOnly: true,
    open: true,
    historyApiFallback: true,
    port: 7000,

    proxy: { '/api': 'http://localhost:3000' },

    overlay: {
      warnings: true,
      errors: true
    }
  },

  entry: { 
    main: './src/index.tsx' 
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { 
        test: /\.(t|j)sx?$/, 
        exclude: /node_modules/, 
        use: { loader: 'awesome-typescript-loader' } 
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [ 
        'style-loader',
        'postcss-loader',
        
        {
          loader: 'sass-loader',

          options: {
            data: "@import '~sass/global';",
            includePaths: [ '/src/sass/_global.scss' ],
            sourceMap: true,
            sourceMapContents: false
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [ 'url-loader?limit=100000' ]
      }, 
      {
        test: /\.svg|jpg|jpeg|png|gif?$/,
        use: [ 'file-loader' ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Starter',
      filename: 'index.html',
      template: './index.template.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
}