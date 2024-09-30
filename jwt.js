const jwt=require('jsonwebtoken');
function JsonAuthMiddleware(req,res,next){
    const token=req.authorization.split('')(1);
    if(!token) return res.status(401).json({message:'UnAuthorized'})
    try{
     const decoded=jwt.verify(token,process.env.JWT_TOKEN)
     req.user=decoded;
     next();
    }
    catch(err){
        return res.status(400).json({message:'Invalid Token'})
    }
}
const GenrateToken=(userData)=>{
    return jwt.sign(userData,process.env.JWT_TOKEN)
}