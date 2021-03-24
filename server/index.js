const express = require("express")
//initialize app
const app=express()

//require morgan|volleyball, path packages
const morgan=require('morgan')
const volleyball=require('volleyball')
const path=require('path')
//require db from /db
const {db,syncAndSeed}=require('./db')
//use morgan|volleyball
app.use(morgan('dev')) //need the dev string in here, morgan needs to be invoked with dev passed in!

//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static(path.join(__dirname, './public'))) //tells code public folder exists
//require in your routes and use them on your api path
const router=require('./routes/index')
app.use('/',router)
//404 handler

//500 handler

//set PORT
const PORT=3000
//listen
app.listen(PORT,()=>console.log(`Now Listening to Port ${PORT}`))
syncAndSeed()