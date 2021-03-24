const studentRouter = require("express").Router()
// module.exports={db,models:{Student,Campus}}

studentRouter.get('/',async(req,res,next)=>{
    try{
        res.send('students go here')
    }
    catch(err){
        next(err)
    }
})

module.exports=studentRouter