const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title: String,
    organizer: String
    description: String,
    type: String,
    lat: mongoose.Schema.Types.Decimal128,
    lng: mongoose.Schema.Types.Decimal128,
    date: [Date],
    rating: mongoose.Schema.Types.Decimal128,
    pictures: [String],
});

const ServiceMessage = mongoose.model('serviceMessage', serviceSchema);

module.exports = ServiceMessage;