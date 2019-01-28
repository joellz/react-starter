const express = require('express')
const compression = require('compression')
const parser = require('body-parser')

const ApiRouter = require('./api')
const Config = require ('./config')
const { port } = Config

const app = express()

//= server config 
app.use(compression({ level: 9 }))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use('/api', ApiRouter(express))

app.listen(port, () => {
  console.log(`front-end server listening on port:${port}`)
})