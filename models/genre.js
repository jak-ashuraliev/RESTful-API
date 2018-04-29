var mongoose = require('mongoose');

// Genre Scheme
var genreSchema = mongoose.Schema({
   name:{
       type: String,
       required: true
   },
   createDate:{
       type: Date,
       default: Date.now
   }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Funciont to Get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}