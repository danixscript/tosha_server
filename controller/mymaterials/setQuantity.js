const adminMaterialsSQL = require("../../models/sql/adminMaterials");



// this is create use rfunction

const setquantityPlace = async (req, res, next) => {
    try {

    let setQuantity = await adminMaterialsSQL.updateQuantity(req.body.quantity,req.body.product.materialid)
      if(setQuantity[0].affectedRows >0){
        res.json({
            productUpdate:setQuantity[0]
            ,msg:'complete'})
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

module.exports.setquantityPlace = setquantityPlace;