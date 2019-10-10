var express = require('express')
var app = express()
var port = 3000
var logUtil = require('./utils/logging.js')
var suggestionRouter = require('./routes/suggestion.js')

app.use(express.json())
app.use(logUtil.requestLog);
app.use('/suggestion/', suggestionRouter);
app.listen(port)

