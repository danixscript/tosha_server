const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const DeActiveProduct = async (req, res, next) => {
    try {

    let DeactiveProduct = await adminproductsSQL.removeProductFromDisplay(req.body.id)
      if(DeactiveProduct[0].affectedRows >0){
        res.json({
            msg:{type:'good',msg:'you active a product'}}) 
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

module.exports.DeActiveProduct = DeActiveProduct;