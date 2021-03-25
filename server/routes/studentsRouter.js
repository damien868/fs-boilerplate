const studentRouter = require("express").Router()
const Student=require('../db/models/studentModel')

studentRouter.get('/',async(req,res,next)=>{
    try{
        const students= await Student.findAll()
        res.send(students)
    }
    catch(err){
        next(err)
    }
})

module.exports=studentRouter