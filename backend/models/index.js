const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/way-farer',
  { useNewUrlParser: true })

module.exports= {
    Post: require('./Post'),
    User: require('./User')
}
