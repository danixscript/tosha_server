const jwt = require("../auth/jwt");

const tryGetIn = async (req, res, next) => {
    try {
     let pass =   await jwt.chekingToken(req.body.token);
     console.log(req.body.token,pass)
     if(req.body.token){
        //  res.json({token:req.body.token})
        req.token = req.body.token;
        next()
     }
     else{
         res.json({err:"no tokens"})
     }
  
    
    } catch (e) {
      res.json({err:"no token to pass",notoken:e})
  } 
};

module.exports.tryGetIn = tryGetIn;
