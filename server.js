var express = require('express')
var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.debug.config.js')

const host = '0.0.0.0'
const port = 9090

const app = express()

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, host, (err) => {
          if(err)
              console.log(err);

          console.log(`listening on port ${port}`);
});
