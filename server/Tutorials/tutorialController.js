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
		Tutorial.findOne({tutorialname:req.body.tutorialname},function (err,Alltutorialname) {
			// console.log("alllllllll",Alltutorialname)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(Alltutorialname)
			}
		})
	}
}

