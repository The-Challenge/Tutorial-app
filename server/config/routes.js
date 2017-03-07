var express = require('express');
var app = express()
var userController = require('../users/usersController.js');

module.exports = function (app, express) {

	app.post('/api/user/', userController.insertUser) 
	app.post('/api/UserSignup', userController.userSignup)
	app.post('/api/UserSignin', userController.userSignin);


	app.get('/api/user/:name', userController.getUser)
	app.get('/', function(req, res) {
 	 res.send('helloooo! Angular2');
	});
};
