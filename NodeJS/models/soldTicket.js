var Ticket = require('./ticket');
var Passenger = require('./passanger')

const mongoose = require('mongoose');

var SoldTicket = mongoose.model('SoldTicket', {
    ticket: {type: Ticket},
    passenger: {type: Passenger}
}, 'soldTickets');

module.exports = { SoldTicket: SoldTicket };
