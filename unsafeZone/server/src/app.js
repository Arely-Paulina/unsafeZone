const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'))

app.use(require('./routes/users.routes'))

module.exports = app;
