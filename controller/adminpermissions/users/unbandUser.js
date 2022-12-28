const userssql = require("../../../models/sql/admin");



// this is create use rfunction

const unbandUserController = async (req, res, next) => {
    try {

    let bandUserRequeast = await userssql.unBandUserSql(req.body.userid);


      if(bandUserRequeast[0].affectedRows >0){
        res.json({
         
            msg:{msg:'complete',type:"good"}})
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

module.exports.unbandUserController = unbandUserController;