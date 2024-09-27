const express=require('express');
const route=express.Router();
const Product=require('../Product.js')
route.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newProduct=new Product(data);
        const response=await newProduct.save();
        console.log('Product Data saved')
        res.status(200).json(response)
    }catch(err){
        res.status(500).json('Internal Error Ocuurred')
        console.log(err)
    }
})
route.get('/',async(req,res)=>{
    try{
    const data=await Product.find();
    res.status(200).json(data)
    }catch(err){
      res.status(500).json('Internal server error')
      console.log(err);
    }
})
route.get('/:name',async(req,res)=>{
    try{
     const name=req.params.name;
     const response=await Product.findOne({name:name});
     res.status(200).json(response);
     console.log('Product is fetched successfully')

    }catch(err){
      res.status(500).json({message:err.message});
    }
})
route.put('/:id',async(req,res)=>{
try{
const userId=req.params.id;
const UpdatedProduct=req.body
const response=await Product.findByIdAndUpdate(userId,UpdatedProduct,{new:true,runValidators:true});
if(!response){
 return res.status(400).json('Product is not found')
}
res.status(200).json(`${userId} is successfully updated`)
}catch(err){
    res.status(500).json('Internal Server Error')
    console.log(err);
}
})
route.delete('/:id',async(req,res)=>{
try{
const userId=req.params.id;
const response=await Product.findByIdAndDelete(userId);
if(!response){
    res.status(400).json('Product is not found');
}else{
    res.status(200).json(`${userId} is successfully deleted`)
}
}catch(err){
    res.status(500).json('Internal Server Error')
    console.log(err);
}
})

module.exports=route;