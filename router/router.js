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

		newUser = {
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		}
		
		// session = req.session.id
		 

		loggers.push(newUser)
		 console.log(loggers)

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
	let currentUser = loggers.find(function(user){ return user.username == req.body.username})

	
		if(currentUser.username == req.body.username && currentUser.password == req.body.password){
		session.id = req.body.username
		console.log(session.id)
		res.render('page', {member: currentUser.username, number :'Enter a numer'})

	}else{
		res.render('index')
	}
})

//Page after succesfull login
router.get('/test', (req, res)=>{
	session = req.session
	if(!session.id){
		res.redirect('/login')
	}else{
		res.render('page', {number:'Enter any number', member:person })
	}
	
})


// logout route
	router.get('/logout', (req, res)=>{
		console.log('Destroying session');
		session = req.session
		req.session.destroy()
			res.redirect('/')
		
	})

module.exports = router;