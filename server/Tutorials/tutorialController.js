var Tutorial = require('./tutorialsModel.js')

module.exports ={
	
	addTutorial : function (req, res) {
		var data = req.body
			Tutorial.create(data, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
		})
	},
	getTutorials : function (req, res) {
		Tutorial.find(function (err,AllTutorials) {
			// console.log("alllllllll",AllTutorials)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(AllTutorials)
			}
		})
	},

	getTutorial : function (req, res) {
		console.log('paraaaammmmms',req.params)
		Tutorial.findOne({tutorialname:req.params.tutorialname},function (err,Alltutorialname) {
			// console.log("alllllllll",Alltutorialname)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(Alltutorialname)
			}
		})

	}, 

	AddCommit : function(req,res){
		console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!update user',req.body)
		console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!update user',req.body.comments)

		Tutorial.findOne({_id:req.body._id},function (err,tutorial) {
			// console.log("alllllllll",Allusers)
			newComments = req.body.comments
			if (err) {
				res.status(500).send(err);
			}else{
				// console.log('in query user!!!!!!!',user.tutorials)
				if(tutorial.comments.indexOf(req.body.comments) === -1){
					// console.log("@!!!!!!!!@user.tutorials",user.tutorials)
					// console.log("@!!!!!!!!@req.body.TutorialID",req.body.TutorialID)
					tutorial.comments.push(newComments)
					console.log("@!!!!!!!!@after puushing user.tutorials ",tutorial.comments)

					// user.tutorials= arr
					tutorial.save(function(err) {
						if (err) throw err;
						console.log('User successfully updated!');
						});
					res.status(200).json(tutorial)
				}else{
					res.status(200).json('you already have this tutorial!!')
				}
			}
		})
},

getUserTutorial : function(req,res){
	console.log('paaraaaams!!!!!!',req.params.tutorialID)
	Tutorial.findOne({_id:req.params.tutorialID},function (err,Alltutorialname) {
			// console.log("alllllllll",Alltutorialname)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(Alltutorialname)
			}
		})

}



}  