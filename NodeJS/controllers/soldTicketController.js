const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { SoldTicket } = require('../models/soldTicket');

router.get('/', (req, res) => {
    SoldTicket.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Ticket :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    SoldTicket.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Ticket :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var soldTicket = new SoldTicket({
        ticket: req.body.ticket,
        passenger: req.body.passenger
    });
    soldTicket.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    var soldTicket = {
        ticket: req.body.ticket,
        passenger: req.body.passenger
    };
    SoldTicket.findByIdAndUpdate(req.params.id, { $set: soldTicket }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    SoldTicket.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
