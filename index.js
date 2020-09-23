const express = require('express')
//const cookie = require('cookie-parser')
const sessions = require('express-session')
const router = require('./router/router')
const bodyParser = require( 'body-parser')
const bcrypt = require('bcrypt') //module to harsh password

var session;
const app = express()

//Declaring sets of middleWarenode 
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(cookie());

app.use(sessions({
    secret: "567yggff343tg!##",
resave: true,
saveUninitialized: true,
cookie: {
    express: true,
}
}));
app.use(router)






const port  = process.env.PORT || 3000
const server = app.listen(port, (err,res)=>{
console.log('Server started at port or 3000')
})