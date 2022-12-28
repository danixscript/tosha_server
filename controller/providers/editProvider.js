const providersSQl = require("../../models/sql/providers");



// this is create use rfunction

const editProviderController = async (req, res, next) => {
    try {

    let someRequaste = await providersSQl.editProviderSQl(
        req.body.name ,
        req.body.agentname, 
         req.body.address,
         req.body.phone ,
         req.body.email,
         req.body.zipcode,
         req.body.cat,
         req.body.id 

    )

      if(someRequaste[0].affectedRows >0){
        res.json({
            msg:{type:'good',msg:'complete'}})
      }else{
        res.json({
            err:{msg:'nothing change',type:"bat"}})
      }

    } catch (e) {
        console.log(":::err getting update price:", e)
        res.json({
            err: { msg:"error  update price:" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.editProviderController = editProviderController;