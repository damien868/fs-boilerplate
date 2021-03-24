const campusRouter = require("express").Router()

campusRouter.get('/',async(req,res,next)=>{
    try{
        res.send('campuses go here')
    }
    catch(err){
        next(err)
    }
})

module.exports=campusRouter