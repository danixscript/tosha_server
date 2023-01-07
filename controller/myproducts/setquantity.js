const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const setQuantityController = async (req, res, next) => {
    try {

    let setQuantity = await adminproductsSQL.updateQuantity(req.body.quantity,req.body.product.id)
      if(setQuantity[0].affectedRows >0){
        res.json({
            productUpdate:setQuantity[0]
            ,msg:'complete'})
      }else{
        res.json({
          
            err:{msg:"שגיאה בעידכון מלאי מוצר",type:"bat"}})
      }

    } catch (e) {
        res.json({
            err: { msg:"שגיאה בעידכון מלאי מוצר" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.setQuantityController = setQuantityController;