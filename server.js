const express=require('express');
const app=express();
const db=require('./db.js');
const PersonRouter=require('./Routes/PersonRoute.js')
const ProductRouter=require('./Routes/ProductRoute.js')
require('dotenv').config();
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to mysite')
})


app.use('/Person',PersonRouter);
app.use('/Product',ProductRouter);
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Listening on PORT 3000')
});
// Comment for testing purpose