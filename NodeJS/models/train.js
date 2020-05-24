const mongoose = require('mongoose');

var Train = mongoose.model('Train' , {
    direction: {type: String},
    departureTime: {type: String},
    arrivalTime: {type: String},
    places: {type: Number}
}, 'trains')

module.exports = {Train :Train};
