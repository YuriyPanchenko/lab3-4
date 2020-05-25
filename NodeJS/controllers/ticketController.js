const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Ticket } = require('../models/ticket');
var { Train } = require('../models/train')

router.get('/', (req, res) => {
    Ticket.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Ticket :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Ticket.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Ticket :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var ticket = new Ticket({
        place: req.body.place,
        price: req.body.price,
        train: req.body.train
    });
    ticket.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    var ticket = {
        place: req.body.place,
        price: req.body.price,
        train: req.body.train
    };
    Ticket.findByIdAndUpdate(req.params.id, { $set: ticket }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Ticket.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Passenger Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
