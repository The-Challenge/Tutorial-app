var express = require('express');
var mongoose = require('mongoose')
var path = require ('path')

var app = express()

require('./server/config/middleware.js')(app , express);
require('./server/config/routes.js')(app , express);


var port = 8001

 mongoose.Promise = global.Promise
 mongoose.connect('mongodb://localhost/tutorialsdb');


app.listen(process.env.PORT || port);
console.log("listining 8000")

module.exports = app;