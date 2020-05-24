const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Passenger } = require('../models/passanger');

router.get('/', (req, res) => {
    Passenger.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Passenger :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Passenger.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Passenger :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var passenger = new Passenger({
        name: req.body.name,
        surname: req.body.surname,
        passportNumber: req.body.passportNumber,
    });
    passenger.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Passenger Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var passenger = {
        name: req.body.name,
        surname: req.body.surname,
        passportNumber: req.body.passportNumber
    };
    Passenger.findByIdAndUpdate(req.params.id, { $set: passenger }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Passenger Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Passenger.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Passenger Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
