var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// Genre = require('./models/genre');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
   res.send('Hello World one more time!'); 
});

// app.get('/api/genres', function(req, res){
//    Genre.getGenres(function(err, genres){
//       if(err){
//          throw err;
//       }
//       res.jason(genres);
//    });
// });


app.listen(process.env.PORT, process.env.IP);
console.log('App is and running!');