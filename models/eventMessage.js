const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: String,
    organizer: String,
    description: String,
    type: String,
    lat: mongoose.Schema.Types.Decimal128,
    lng: mongoose.Schema.Types.Decimal128,
    date: Date,
    rating: mongoose.Schema.Types.Decimal128,
    pictures: [String],
});

const EventMessage = mongoose.model('eventMessage', eventSchema);

module.exports = EventMessage;