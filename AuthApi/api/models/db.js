const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TravelUser',  { useNewUrlParser: true ,useCreateIndex:true} );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB database connection established successfully!");
});

require('./users');
