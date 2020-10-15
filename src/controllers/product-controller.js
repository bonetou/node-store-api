'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

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

exports.getBySlug = async (req, res, next) => {
    try {
        var data = await respository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.getByTag = async (req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        return data;
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'title must contain at least 3 characters');
    contract.hasMinLen(req.body.slug, 3, 'slug must contain at least 3 characters');
    contract.hasMinLen(req.body.description, 10, 'description must contain at least 10 characters');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'registered product'
        });
    } catch (e) {
        res.status(400).send({
            message: 'registered product failed',
            data: e
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: 'product updated'
        });
    } catch (e) {
        res.status(400).send({
            message: 'product update error',
            data: e
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(201).send({
            message: 'product removed'
        });
    } catch (e) {
        res.status(400).send({
            message: 'product remove error',
            data: e
        });
    }
}
