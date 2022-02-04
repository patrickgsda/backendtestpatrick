const mongoose = require('mongoose');

const ForecastSchema = new mongoose.Schema({
    keys: {
        type: String,
        required: true
    },
    localeId: {
        type: Number,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    forecast: {
        type: Array,
        required: true
    }

})

module.exports = mongoose.model('Forecast', ForecastSchema, 'Forecasts')