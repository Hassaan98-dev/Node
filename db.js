const mongoose = require('mongoose');
require('dotenv').config()
const mongoUrl=process.env.db_Url

mongoose.connect(mongoUrl)
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MONGODB')
})
db.on('disconnect',()=>{
    console.log('disconnected from MONGODB')
})
db.on('error',()=>{
    console.log('Some error occured while connecting to MONGODB')
})
module.exports=db;