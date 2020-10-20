'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    number: {
        type: String,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: Date,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        }
    }]
});

module.exports = mongoose.model('Order', Order);
