
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const acceptOrder = async (req, res, next) => {
try {
  




  

  let getAllMyOrders = await orders.acceptUserOrder(req.body.id);
  
    
    res.json({data:getAllMyOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.acceptOrder = acceptOrder;
