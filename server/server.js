var express = require('express');
var mongoose = require('mongoose')

var app = express()

require('./config/middleware.js')(app , express);
require('./config/routes.js')(app , express);

var port = 8000

 mongoose.Promise = global.Promise
 mongoose.connect('mongodb://localhost/tutorialsdb');


app.listen(process.env.PORT || port);
console.log("listining 8000")
