'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// database connection
mongoose.connect('mongodb+srv://boneto:boneto@cluster0.rpyi0.azure.mongodb.net/balta?retryWrites=true&w=majority')
// load routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;