
const products = require("../../models/sql/sqlpools");


// this is create use rfunction

const getProductById = async (req, res, next) => {
try {
  




 

  let getProductById = await products.getProductById(req.body.id);

 req.products = getProductById[0][0]
 next()
    
    // res.json({data:getProductById[0][0]});
  
  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getProductById = getProductById;
