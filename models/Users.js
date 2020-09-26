const mongoose = require('mongoose')

var users = mongoose.Schema

const person = new users({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    }
})

var User = mongoose.model('users', person)

module.exports = User