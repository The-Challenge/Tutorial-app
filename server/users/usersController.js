var User = require('./usersModel.js')
var Tutorial = require('../Tutorials/tutorialsModel.js')

var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');



var hashpass=function(pass,callback){
  	bcrypt.hash(pass , null, null, function(err, hash) {
        if(err) { throw new Error(err)};
        callback(hash);
       });
};


var comparePass=function(pass,hash,callback){
	bcrypt.compare(pass,hash,function(err, res) {
    	if(err) { throw new Error(err)};
    	callback(res);
    });
};

	var gettu = function(user,callback){
			let arr=[]
			let answer 
			// let tutorials = user.tutorials
				// for(var i=0;i< tutorials.length;i++){
					console.log('userrr',user)
					 Tutorial.findOne({_id:user}).exec((err,tutorial)=> {
						if(err){
							console.log(err)
						}
						else{
							console.log('TTTTTTTTTTTTTTTTTT',tutorial)
							callback( tutorial)
						}
					 })
					 
					 
					//  function (err,tutorial) {
					// 	// console.log("inside loooooooooooooooooooop loooool",tutorial)
					// 	if (err) {
					// 		res.status(500).send(err);
					// 	}
					// 	else{
					// 		arr.push(tutorial)
					// 		//return tutorial
					// 		// arr.push(tutorial)
					// 		// if(i===tutorials.length-1){
					// 		// 	console.log('in ifffffffffffffff',arr)
					// 		// res.status(200).json(arr)
					// 		// }
					// 	}
					// })
					
					// .then(function(data){

					// 	console.log('%%%%%%%%%%%%%%%%%',data)
					// 	answer = data
					// }).then(function(){

					// console.log(answer)
					// return answer
					// }

					// )
				// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!',arr)
			// }
		
	}


module.exports ={
	userSignup:function (req,res) {
		console.log("--=-=-=-=-=reqqqqq",req.body)
		var Username   = req.body.username;
		var Email      = req.body.email;
		var Password = req.body.password;
		var HashPassword = hashpass(Password,function(hash){
				console.log("passweeee",hash)
	  			HashPassword = hash
		     });
		User.findOne({username : Username}).then(function(user) {
			console.log("*****************************loooking for user",Username)
			console.log(HashPassword,Password)
			// if (err) throw err;
			if (user) {
			    res.status(200).send("Sorry the username is already exist!!");
			} 
			else {
				// return
				  User.create({username:Username,email:Email,password: HashPassword})
				.then(function(user){
			  		var token = jwt.encode(user, '!Hahaha!');
	          		res.json({token: token});
				})
    		}
 		})

	},
	userSignin : function(req,res){

		console.log('%%%%%%%%%%%%% body',req.body)
		var password = req.body.password;
		var Username = req.body.username;
		User.findOne({username:Username}).then(function(user){
			if(user){
				// decryptPassword = 
				  comparePass(password,user.password,function(exist){
			        if(exist){
			        	console.log("----------pass",password)
			        	console.log("----------passhash",user.password)
			        	console.log("----------exist",exist)

			          var token = jwt.encode(user, 'hahaha');
			          res.json({token: token});
			                 }else{
			          res.send("password is not correct");
			        }
			      })
			}else {
				res.send("Username not found!!")
			}
		})


	},
	insertUser : function (req, res) {
		var data = req.body
			User.create(data, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201).json(dataInserted[0]);
				}
		})
	},
	getUser : function (req, res) {
		User.findOne({username:req.body.name},function (err,user) {
			// console.log("alllllllll",user)
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(user)
			}
		})
	},
	updateUser : function(req,res){
		console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!update user',req.body.username)
		console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!update user',req.body.TutorialID)

		User.findOne({username:req.body.username},function (err,user) {
			// console.log("alllllllll",Allusers)
			newtutorial = req.body.TutorialID
			if (err) {
				res.status(500).send(err);
			}else{
				console.log('in query user!!!!!!!',user.tutorials)
				if(user.tutorials.indexOf(req.body.TutorialID) === -1){
					console.log("@!!!!!!!!@user.tutorials",user.tutorials)
					console.log("@!!!!!!!!@req.body.TutorialID",req.body.TutorialID)
					user.tutorials.push(newtutorial)
					console.log("@!!!!!!!!@after puushing user.tutorials ",user.tutorials)

					// user.tutorials= arr
					user.save(function(err) {
						if (err) throw err;
						console.log('User successfully updated!');
						});
					res.status(200).json(user)
				}else{
					res.status(200).json('you already have this tutorial!!')
				}
			}
		})
	},
	GetUserTutorials : function(req,res){
		// console.log('get userrrrrrrrrrrrrr tutorialssss',req.body)
		var arr = []
		var counter=-1;
		var flag= false
		// var count=0;

		User.findOne({username:req.body.username},function (err,user) {
			// console.log('666666666666666666',user.tutorials)
			if (err) {
				res.status(500).send(err);
			}else{
				let tutorials = user.tutorials
				// test = tutorials.forEach(tut => {
				// 	 return (gettu(tut))
				// 	// console.log('wtf mate', arr)
				// })
				for(let i=0;i< tutorials.length;i++){
					// console.log("#######################",(gettu(tutorials[i])))
					 counter++
					 gettu(tutorials[i],function(data){
						 arr.push(data)
						//  console.log('zZZZZzz',data)
						 console.log('!!!!!',i,counter)
						 if(counter===tutorials.length-1){
							 console.log('couneterr',arr)
							 flag=true
						 }
						 
					 })
					// console.log('????????',arr)
					// if(counter === tutorials.length-2){
					// 	console.log("helllllllllllllo",arr)
					// 	res.json(arr);
					// }
					// counter++;
				// 	//setTimeout(function() {
						
				// 	console.log("!!!!!!!!!!!!!!!!!!!!!",arr)
				// 	// }, 4000);
				// /////
				// }
			}
			while(flag){
				console.log('!@###@#@#@',arr)
				flag =false
				res.send(arr)
			}

		}

		})

				// console.log('!!!!!!!!@@@@@!@!@!@!@!@!@!@!@',arr)

	}


}



 //  tutorials.forEach(function(tutorial){

//               Tutorial.findOne({_id:tutorial},function (err,tutorial) {
// 						// console.log("inside loooooooooooooooooooop loooool",tutorial)
// 						if (err) {
// 							res.status(500).send(err);
// 						}
// 						else{
// 							arr.push(tutorial)
// 							console.log('!!!!!!!!!!!!why you return empty array (>_<) !!!!! ',arr)
// 							// res.status(200).json(toturial)
// 							// if(count===tutorials.length-1){
// 							// 	res.status(200).json(arr)

// 							// }
// 						}
// 					})
//             })