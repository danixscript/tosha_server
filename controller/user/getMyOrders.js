
const orders = require("../../models/sql/sqlBuy");


// get orders by client id 

const getMyOrders = async (req, res, next) => {
try {
  
console.log(req.query,":::::")




  

  let getAllMyOrders = await orders.selectOrderByClientId(req.query.id);
  
    
    res.json({data:getAllMyOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getMyOrders = getMyOrders;
