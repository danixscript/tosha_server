
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const getOrderInfo = async (req, res, next) => {
try {
  




  

  let getAllMyOrders = await orders.getOrderInfoJoin(req.query.id);
  
    
    res.json({orderinfo:getAllMyOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getOrderInfo = getOrderInfo;
