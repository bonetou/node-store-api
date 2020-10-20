'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// database connection
mongoose.connect('mongodb+srv://boneto:boneto@cluster0.rpyi0.azure.mongodb.net/balta?retryWrites=true&w=majority')

// load models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// load routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;