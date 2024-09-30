const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 3000;


// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/',localAuthMiddleware, function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./Routes/PersonRoute.js');
const productRoutes = require('./Routes/ProductRoute.js');

// Use the routers
app.use('/person',localAuthMiddleware,personRoutes);
app.use('/product',productRoutes);
  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})