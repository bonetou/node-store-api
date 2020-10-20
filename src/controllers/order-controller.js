'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'request error'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: 'order registered'
        });
    } catch (e) {
        res.status(500).send({
            message: 'failed',
            data: e
        });
    }
}
