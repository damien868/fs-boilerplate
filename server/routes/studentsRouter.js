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
studentRouter.get('/:id',async(req,res,next)=>{
    try{
        const student= await Student.findOne({where:{id:req.params.id}})
        res.send(student)
    }
    catch(err){
        next(err)
    }
})
studentRouter.delete('/:id',async(req,res,next)=>{
    try{
        const student= await Student.destroy({where:{id:req.params.id}})
        res.send(student)
    }
    catch(err){
        next(err)
    }
})
studentRouter.post('/new',async(req,res,next)=>{
    try{
        const student= await Student.create({firstName:req.body.studentFirstName,lastName:req.body.studentLastName,email:req.body.studentEmail})
        res.send(student)
    }
    catch(err){
        next(err)
    }
})

module.exports=studentRouter