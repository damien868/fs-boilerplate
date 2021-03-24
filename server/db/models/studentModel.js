const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db
const {db}=require('../db')
//define your model
const Student=db.define('student',{
    firstName:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    lastName:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    email:{
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
    gpa:{
        type:Sequelize.DataTypes.FLOAT,
        validate:{
            isFloat:true,
            isValid(value){
                if(value>4||value<0){
                    throw new Error('GPA must be between 0.0 and 4.0!')
                }
            }
        }
    },
})

//define any class or instance methods

//export your model


module.exports=Student
