var Train = require('./train');

const mongoose = require('mongoose');


var Ticket = mongoose.model('Ticket' , {
    place: {type: Number},
    price: {type: Number},
    train: {type: Train}
}, 'tickets')

module.exports = {Ticket: Ticket};
