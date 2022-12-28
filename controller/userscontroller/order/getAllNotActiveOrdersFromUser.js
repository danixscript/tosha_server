
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const userGetsAllHesNotActiveOrder = async (req, res, next) => {
try {


  let allMyNotActiveOrders = await orders.getUserNotActiveOrderById(req.query.id);
  
    res.json({allMyNotActiveOrders:allMyNotActiveOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.userGetsAllHesNotActiveOrder = userGetsAllHesNotActiveOrder;
