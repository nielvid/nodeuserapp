const express = require("express");
const router = express.Router()
const bcrypt = require('bcrypt'); //module to harsh password
const sessions = require("express-session");



var session;

var loggers = [];

var newUser;



//registeration page
router.get("/register", function(req, res){
	
	res.render('signups')
})

//registeration form handler
router.post('/form', function(req, res){
	
	if (req.body.username =="" || req.body.password == ""){
		res.status(404).render('signups')
	}else{
		bcrypt.hash(req.body.password, 10)
		.then(function(response){
			newUser = {
				username: req.body.username,
				email: req.body.email,
				password: response
			}
			

		}).then(function(data){

			loggers.push(newUser)
		 console.log(loggers)
		}).catch(err => console.log(err))
	
		// session = req.session.id
		 

		

		const hashedPassword = bcrypt.hash(req.body.password, 10)
	.then((response)=>{
		return user = {
			id: Date.now().toString(),
			name: req.body.username,
			email :req.body.email,
			password : response
		}
			
	
	})
	.then((user)=>{ 
		
		
		   
		   person = user.name
		  personPw = user.password

		   list.push(user)
		   console.log(list)
		}
		
)

	.catch(err=>console.log(err));
	


	res.render('index')
}
	
})
		

		
	
		 



	
	
//login page
router.get("/", function(req, res){
	
		res.render('index')
		
})

//login form handler
router.post('/signin', (req, res)=>{
	session = req.session

	if (req.body.username =="" || req.body.password == ""){
		res.status(404).render('index')
	}
	var currentUser = loggers.find(function(user){ return user.username == req.body.username})

	
		if(currentUser.username == req.body.username){

			bcrypt.compare( req.body.password, currentUser.password )
			.then(function(response){
				return response
				
			}).then(function(value){

				if(value === true){
					session.id = req.body.username
		console.log(session.id)
		res.render('page', {member: currentUser.username, number :'Enter a numer'})
				}
				else{
					res.render('index')
				}
			})
			
			.catch(err => console.log(err))

		
	}
})

//Page after succesfull login
router.get('/home', (req, res)=>{
	session= req.session
	if(!session.id)
	
	

	console.log(session.id)
	if(session.id){
		res.render('page', {number:'Enter any number', member:person})
		
	}else{
		res.render('page', {number:'Enter any number', member:currentUser.username })
	}
	
})


// logout route
	router.get('/logout', (req, res)=>{
		session = req.session
		console.log('Destroying session');
		session.id = null
		
			res.redirect('/') // will always fire after session is destroyed
		  
			
		
	})

module.exports = router;


