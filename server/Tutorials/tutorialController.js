var Tutorial = require('./tutorialsModel.js')
var bcrypt = require('bcrypt-nodejs');
//var jwt = require('jwt-simple');

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
			console.log("alllllllll",AllTutorials)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(AllTutorials)
			}
		})
	},

	getTutorial : function (req, res) {
		Tutorial.findOne({tutorialname:req.body.tutorialname},function (err,Alltutorialname) {
			console.log("alllllllll",Alltutorialname)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(Alltutorialname)
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

	// var hashpass=function(pass,callback){
//   	bcrypt.hash(pass , null, null, function(err, hash) {
//         if(err) { throw new Error(err)};
//         callback(hash);
//        });
// };


// var comparePass=function(pass,hash,callback){
// 	bcrypt.compare(pass,hash,function(err, res) {
//     	if(err) { throw new Error(err)};
//     	callback(res);
//     });
// };

// userSignup:function (req,res) {
	// 	console.log("--=-=-=-=-=reqqqqq",req.body)
	// 	var Username   = req.body.username;
	// 	var Email      = req.body.email;
	// 	var Password = req.body.password;
	// 	var HashPassword = hashpass(Password,function(hash){
	// 			console.log("passweeee",hash)
	//   			HashPassword = hash
	// 	     });
	// 	User.findOne({username : Username}).then(function(user) {
	// 		console.log("*****************************loooking for user",Username)
	// 		console.log(HashPassword,Password)
	// 		// if (err) throw err;
	// 		if (user) {
	// 		    res.status(200).send("Sorry the username is already exist!!");
	// 		} 
	// 		else {
	// 			// return
	// 			  User.create({username:Username,email:Email,password: HashPassword})
	// 			.then(function(user){
	// 		  		var token = jwt.encode(user, '!Hahaha!');
	//           		res.json({token: token});
	// 			})
    // 		}
 	// 	})

	// },
	// userSignin : function(req,res){

	// 	console.log('%%%%%%%%%%%%% body',req.body)
	// 	var password = req.body.password;
	// 	var Username = req.body.username;
	// 	User.findOne({username:Username}).then(function(user){
	// 		if(user){
	// 			// decryptPassword = 
	// 			  comparePass(password,user.password,function(exist){
	// 		        if(exist){
	// 		        	console.log("----------pass",password)
	// 		        	console.log("----------passhash",user.password)
	// 		        	console.log("----------exist",exist)

	// 		          var token = jwt.encode(user, 'hahaha');
	// 		          res.json({token: token});
	// 		                 }else{
	// 		          res.send("password is not correct");
	// 		        }
	// 		      })
	// 		}else {
	// 			res.send("Username not found!!")
	// 		}
	// 	})


	// },