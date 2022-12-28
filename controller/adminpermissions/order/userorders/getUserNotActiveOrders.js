
const orders = require("../../../../models/userssql/orders");


// get orders by client id 

const adminGetNotActiveOrdersUSers = async (req, res, next) => {
try {


  let allMyNotActiveOrders = await orders.getNotActiveOrders();
  
    res.json({allMyNotActiveOrders:allMyNotActiveOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.adminGetNotActiveOrdersUSers = adminGetNotActiveOrdersUSers;
