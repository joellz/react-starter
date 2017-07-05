import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const webpackDevConfig = require('./webpack.debug.config')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 9090
const app  = express()

const compiler = webpack(webpackDevConfig)
const middleware = webpackMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
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

app.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))

app.listen(port, host, err => {
  console.log(`listening on port ${port}`)
})
