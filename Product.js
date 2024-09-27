const mongoose=require('mongoose');
const {ProductCollection}=require('./db.js');
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Image:{
        required:true,
        type:String
    },
    ratting:{
        required:true,
        type:Number
    },
    title:{
        required:true,
        type:String,
        unique:true
    }
})
const Product=ProductCollection.model('Product',ProductSchema)
module.exports=Product