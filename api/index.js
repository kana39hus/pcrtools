// index.js
import express from 'express'

const app = express()
//app.use(express.json())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.use('/pcr', require('./routes/pcr'))

export default {
    path: '/api',
    handler: app
}