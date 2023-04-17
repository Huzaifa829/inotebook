var jwt = require('jsonwebtoken');
const JWT_SEC='huzaifaahmed@'

const fetch=(req,res,next)=>{
    //get the user from the jwt token and id to req obbject
    const token=req.header("auth-token")
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
        const data=jwt.verify(token,JWT_SEC)
        req.user=data.user;        
    } catch (error) {
        res.status(401).send({error:"please authenticate using a valid token"})

    }
    next()
}

module.exports=fetch;