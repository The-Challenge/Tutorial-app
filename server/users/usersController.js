var user = require('./usersModel.js')

//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//insert users controller
	insertUser : function (req, res) {
		
		var data = req.body
			user.create(data, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
		})
	},
	getUser : function (req, res) {
		user.find({name:req.body.name},function (err,Allusers) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(Allusers)
			}
		})
	}
}


//get all the users controller
	// getAllUsers : function (req, res) {
	// 	user.find({name:req.body.name},function (err,Allusers) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		}else{
	// 			res.json(Allusers)
	// 		}
	// 	})
	// },