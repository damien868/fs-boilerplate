//import your db
const {db}=require('./db')
//import your models
const Student=require('./models/studentModel')
const Campus=require('./models/campusModel')
//state your model associations (hasOne etc)
Student.belongsTo(Campus)
Campus.hasMany(Student)
//export your db and Models (so they all can be imported from a single central location)

async function syncAndSeed(){
    await db.sync({force:true})//drop existing tables
    const moe=await Student.create({firstName:'moe',lastName:'watson',email:'moewats@gmail.com',gpa:3.1})
    const harvard=await Campus.create({name:'Harvard',address:'1000 Harvard Drive',description:"An Ivy League school in Massachusetts"})
    moe.campusId=harvard.id //modify moe campusId
    moe.campusInfo=harvard.name
    await moe.save() //save changes to Moe
    const larry=await Student.create({firstName:'larry',lastName:'harrison',email:'larryharrison@gmail.com',gpa:3.2})
    const yale=await Campus.create({name:'Yale',address:'799 Connecticut Way',description:"An Ivy League school in Connecticut"})
    larry.campusId=yale.id //modify moe campusId
    larry.campusInfo=yale.name
    await larry.save() //save changes to Moe
}
module.exports={db,syncAndSeed,models:{Student,Campus}}