const express = require("express");
const router = express.Router()
const bcrypt = require('bcrypt'); //module to harsh password
const sessions = require("express-session");


var session;

var list = [];
var person;
var personPw;



//registeration page
router.get("/register", function(req, res){
	
	res.render('signups')
})

//registeration form handler
router.post('/form', function(req, res){

	if (req.body.username =="" || req.body.password == ""){
		res.status(404).render('signups')
	}else{
		 person = req.body.username;
		 email = req.body.email;
		 personPw = req.body.password
		// session = req.session.id
		 
	newUser = {
		username: person,
		email: email,
		password: personPw
	}
		list.push(newUser)
		 console.log(list)

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
	else if(req.body.username == person && req.body.password ==personPw){
		session.id = req.body.username
		console.log(session.id)
		res.render('page', {member: person, number :'Enter a numer'})
	}else{
		res.redirect('/')
	}

	})

//Page after succesfull login
router.get('/home', (req, res)=>{
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