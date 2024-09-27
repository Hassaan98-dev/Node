const mongoose=require('mongoose')
const {PersonCollection}=require('./db.js')
const PersonSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    phoneNumber:{
        required:true,
        type:Number,
        unique:true
    },
    Age:{
        required:true,
        type:Number,
    },
    address:{
        required:true,
        type:String
    },
    Profession:{
        enum:['Programmer',"Student","Businessman"],
        type:String,
        required:true
    }

})
const Person=PersonCollection.model("Person",PersonSchema);
module.exports=Person;