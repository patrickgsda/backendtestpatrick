require('dotenv').config()
const express = require('express');
const app = express();

const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error',(err) => console.log(err))
db.once('open',(err) => console.log('Database Connected'))

app.use(express.json())

const forecastRoute = require('./routes/forecastRoute')
app.use('/api/get-forecast', forecastRoute)

module.exports = app