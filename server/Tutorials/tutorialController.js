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

