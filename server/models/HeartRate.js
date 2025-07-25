const mongoose = require('mongoose');

const HeartRateSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true,
    },
    cause: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('HeartRate', HeartRateSchema);
