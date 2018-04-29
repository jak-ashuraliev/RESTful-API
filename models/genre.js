var mongoose = require('mongoose');

// Genre Scheme
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    crateDate:{
        type: Date,
        default: Date.now
    }
});