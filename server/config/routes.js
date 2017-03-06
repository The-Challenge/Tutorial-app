var express = require('express');
var app = express()
var userController = require('../users/usersController.js');

module.exports = function (app, express) {
	
//=============================================================================
/*								user route									 */
//=============================================================================
	app.post('/api/user/', userController.insertUser) 
	app.get('/api/user/:name', userController.getUser)
	//app.get('/api/user/', bookController.getAllBooks)

	app.get('/', function(req, res) {
 	 res.send('helloooo! Angular2');
	});
};
