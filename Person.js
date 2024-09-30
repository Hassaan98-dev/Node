const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
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
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }

})
PersonSchema.pre('save',async function(next){
const person=this;
if(!person.isModified('password')) return next();
try{
  const salt=await bcrypt.genSalt(10)
  const hashedPassword=await bcrypt.hash(person.password,salt);
  person.password=hashedPassword;
  next();
}catch(err){
next(err);
}
})
PersonSchema.methods.comparePassword=async function(candidatePassword){
    try{
      const isMatch=await bcrypt.compare(candidatePassword,this.password);
      return isMatch;
    }catch(err){
        throw err;
    }
}
const Person=mongoose.model('Person',PersonSchema)
module.exports=Person;