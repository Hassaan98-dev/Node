const express=require('express');
const route=express.Router();
const Person=require('../Person.js');


route.get('/:Profession',async(req,res)=>{
    try{
        const ProfessionType=req.params.Profession;
        if(ProfessionType=='Student' || ProfessionType=='Programmer' || ProfessionType=='Businessman'){
         const response=await Person.find({Profession:ProfessionType});
         res.status(200).json(response);
        }else{
            res.status(400).json('Invalid Profession Type')
        }
    }catch(err){
        res.status(500).json('Internal Server Error')
        console.log(err);
    }
})
route.get('/',async(req,res)=>{
    try{
    const data=await Person.find();
    res.status(200).json(data)
    }catch(err){
        res.status(500).json("Internal Error Occured")
        console.log(err)
    }
})
route.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log('Data is saved')
        res.status(200).json(response)
    }catch(err){
       res.status(500).json('Internal Error Occured')
       console.log(err);
    }

})
route.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;

        // Remove _id if present
        if (updatedData._id) {
            delete updatedData._id;
        }

        const response = await Person.findByIdAndUpdate(
            userId,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!response) {
            return res.status(404).json('Person not found');
        }

        console.log('Updated response:', response); // Log the updated response
        res.status(200).json(response);
    } catch (err) {
        console.error('Error updating person:', err);
        res.status(400).json('Error: ' + err.message);
    }
});


route.delete('/:id',async(req,res)=>{
    try{
    const userId=req.params.id;
    const response=await Person.findByIdAndDelete(userId)
    if(!response){
        return res.status(400).json('Person is not found')
    }
    res.status(200).json(`${userId}: deleted successfully`);
    }catch(err){
     res.status(400).json('Person Delete Failed')
    }
})
module.exports=route;