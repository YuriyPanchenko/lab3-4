const mongoose = require('mongoose');

var Passanger = mongoose.model('Passenger', {
    name: { type: String },
    surname: { type: String },
    passportNumber: { type: Number }
}, 'passenger');

module.exports = { Passenger: Passanger };
