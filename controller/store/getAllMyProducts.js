
const products = require("../../models/sql/sqlpools");


// this is create use rfunction

const getAllMyProducts = async (req, res, next) => {
try {
  




 

  let getAllMyItems = await products.selectProductById(req.query.id);

  if(getAllMyItems){
    
    res.json({data:getAllMyItems[0]});
  }
  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getAllMyProducts = getAllMyProducts;
