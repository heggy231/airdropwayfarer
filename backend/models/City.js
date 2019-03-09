const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    city: String,
    
})

module.exports = mongoose.model('City', CitySchema)