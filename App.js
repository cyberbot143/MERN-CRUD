

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')
var port = 4200;

// Mongoose connection with mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/MERN"); //connection to mongodb
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });
// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function(){
  console.log('hello world');
})