const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db
const {db}=require('../db')
//define your model
const Campus=db.define('campus',{
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    imageURL:{
        type:Sequelize.DataTypes.STRING,
        defaultValue:'https://www.google.com/'
    },
    address:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    description:{
        type:Sequelize.DataTypes.STRING
    }
})

//define any class or instance methods

//export your model


module.exports=Campus
