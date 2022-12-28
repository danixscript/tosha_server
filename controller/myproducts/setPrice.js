const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const setPrice = async (req, res, next) => {
    try {

    let setPriceSt = await adminproductsSQL.updatePrice(req.body.newprice,req.body.product.id)
      if(setPriceSt[0].affectedRows >0){
        res.json({
            productUpdate:setPriceSt[0]
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

module.exports.setPrice = setPrice;