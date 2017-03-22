var mongoose = require('mongoose');

var tutorialSchema = new mongoose.Schema({
	tutorialname : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	ownername : {
		type : String,
		required : true
	},
    duration : {
		type : String,
		required : true
	},
    users : {
		type : String
		
	},
    image : {
		type : String
		
	},
	commits : [] 
});

var tutorial = mongoose.model('tutorial', tutorialSchema);

module.exports = tutorial;


// {
// 	"tutorialname" : "java",
// 	"description" : "introdition",
// 	"ownername" : "kamal",
//     "duration" : "7hours",
//     "users" :"1000000",
//     "image" : "" 
// }