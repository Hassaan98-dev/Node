const express=require('express');
const app=express();
const db=require('./db.js');
const PersonRouter=require('./Routes/PersonRoute.js')
const ProductRouter=require('./Routes/ProductRoute.js')
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to mysite')
})


app.use('/Person',PersonRouter);
app.use('/Product',ProductRouter)
app.listen(3000);
// Comment for testing purpose