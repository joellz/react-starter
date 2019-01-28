import express from 'express'
import compression from 'compression'
import parser from 'body-parser'

import { ApiRouter } from './api'
import { Config } from './config'

const { port } = Config

const app = express()

//= server config 
app.use(compression({ level: 9 }))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use('/api', ApiRouter())

app.listen(port, () => {
  console.log(`front-end server listening on port:${port}`)
})