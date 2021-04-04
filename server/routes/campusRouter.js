const campusRouter = require("express").Router()
const Campus=require('../db/models/campusModel')

campusRouter.get('/',async(req,res,next)=>{
    try{
        const campuses=await Campus.findAll()
        res.send(campuses)
    }
    catch(err){
        next(err)
    }
})
campusRouter.get('/:id',async(req,res,next)=>{
    try{
        const campus=await Campus.findOne({where:{id:req.params.id}})
        res.send(campus)
    }
    catch(err){
        next(err)
    }
})
campusRouter.post('/new',async(req,res,next)=>{
    try{
        const newCampus=await Campus.create({name:req.body.campusName,address:req.body.campusAddress,description:req.body.campusDescription})
        res.status(201).send(newCampus)
    }
    catch(err){
        next(err)
    }
})
campusRouter.post('/:id',async(req,res,next)=>{
    try{
        console.log(req.body)
        const campus=await Campus.findOne({where:{id:req.params.id}})
        campus.name=req.body.name
        campus.address=req.body.address
        campus.description=req.body.description
        campus.imageURL=req.body.image
        await campus.save()
        res.status(201).send(campus)
    }
    catch(err){
        next(err)
    }
})
campusRouter.delete('/:id',async(req,res,next)=>{
    try{
        const campus= await Campus.destroy({where:{id:req.params.id}})
        res.sendStatus(204)
    }
    catch(err){
        next(err)
    }
})

module.exports=campusRouter