const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const nodeModules = {}

fs.readdirSync('node_modules').filter(x => ['.bin'].indexOf(x) === -1)
.forEach(mod => nodeModules[mod] = `commonjs ${mod}` )

module.exports = {
  externals: nodeModules,
  name: 'server',
  target: 'node',
  mode: 'development',
  
  resolve: {
    modules: [ 'api', 'config', 'controllers' ],
    extensions: ['.ts', '.js']
  },

  entry: {
    main: path.join(__dirname, 'src/server.ts')
  },
  module: {
    rules: [
      { 
        test: /\.(t|j)sx?$/, 
        exclude: /node_modules/, 
        use: { loader: 'awesome-typescript-loader' } 
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
  ],
  output: {
    path: `${__dirname}/build/`,
    filename: "server.bundle.js",
    publicPath: "/build/"
  }
}