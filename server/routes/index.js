const router = require("express").Router()
const path=require('path')
//import models from /db
const studentsRouter=require('./studentsRouter')
const campusRouter=require('./campusRouter')
//routes go here
router.use('/students',studentsRouter)
router.use('/campus',campusRouter)
router.get('/',async(req,res,next)=>{
    try{
        res.sendFile(path.join(__dirname,'../public/index.html'))
    }
    catch(err){
        next(err)
    }
})

module.exports = router
