const {Sequelize,Model} = require("sequelize")
//initialize your db, don't forget to include the possible heroku database URL
const db= new Sequelize('postgres://localhost/JPFP')
//export your db

module.exports={db}
