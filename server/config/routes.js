var express = require('express');
var app = express()
var userController = require('../users/usersController.js');
var tutorialController = require('../Tutorials/tutorialController.js');

module.exports = function (app, express) {

	app.post('/api/tutorial', tutorialController.addTutorial) 
	app.post('/api/UserSignup', userController.userSignup)
	app.post('/api/UserSignin', userController.userSignin);
	app.post('/api/user/', userController.insertUser) 

	app.put('/api/updateuser', userController.updateUser) 
	app.put('/api/Addcommit', tutorialController.AddCommit) 

	app.get('/api/tutorials', tutorialController.getTutorials) 
	app.get('/api/tutorials/:tutorialname', tutorialController.getTutorial)
	app.get('/api/tutorial/:tutorialID', tutorialController.getUserTutorial)

	// app.get('/api/GetUserByUsername', userController.getUser)
	app.post('/api/GetUserTutorials', userController.GetUserTutorials)


	
};
