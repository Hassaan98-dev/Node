const mongoose=require('mongoose');
const PersonCollection=mongoose.createConnection('mongodb://127.0.0.1:27017/Person',{
    useUnifiedTopology:true,
    useNewUrLParser:true
})
const ProductCollection=mongoose.createConnection('mongodb://127.0.0.1:27017/Person',{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
ProductCollection.on('connected',()=>{
    console.log("Product is connected to MongoDb")
})
ProductCollection.on('disconnect',()=>{
    console.log('Product is disconnect from MongoDb')
})
ProductCollection.on('error',(err)=>{
  console.log('Some error occured while connecting Product to MongoDb')
})
PersonCollection.on('connected',()=>{
    console.log('Person is connected to MongoDb')
})
PersonCollection.on('error',(err)=>{
    console.log('Some Error occured while connection Person to MongoDb',err)
})
PersonCollection.on('disconnect',()=>{
    console.log('Person disconnected to MongoDb')
})
module.exports={PersonCollection,ProductCollection};