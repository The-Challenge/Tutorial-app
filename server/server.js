var express = require('express');
var mongoose = require('mongoose')

var app = express()

require('./config/middleware.js')(app , express);
require('./config/routes.js')(app , express);

var port = 3000

 mongoose.Promise = global.Promise
 mongoose.connect('mongodb://localhost/mydb');


app.listen(process.env.PORT || port);
