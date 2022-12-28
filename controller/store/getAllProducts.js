
const products = require("../../models/sql/sqlpools");


// this is create use rfunction

const getAllProducts = async (req, res, next) => {
try {
  




 

  let getAllItems = await products.getAllProduct();

 
    
    res.json({data:getAllItems[0]});
  
  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getAllProducts = getAllProducts;
