
const products = require("../../models/sql/sqlpools");




const delItem = async (req, res, next) => {
try {
console.log(req.body)
    if(req.body.isStore == "yes"){

        let del = await products.delproduct(req.body.productStoreId);
        // res.json({msg:'delete sucssece'})
        next()


    }else{
          res.json({msg:"user not hold this product"})

    }





} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.delItem = delItem;
