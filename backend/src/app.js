const express = require('express')
const app = express()
const routes = require('./routes/routes')

require('./database')

app.use(express.json())
app.use('/', routes)

module.exports = app