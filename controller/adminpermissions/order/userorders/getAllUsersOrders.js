
const orders = require("../../../../models/userssql/orders");


// get orders by client id 

const adminGetAllUsersOrders = async (req, res, next) => {
try {


  let allUsersOrders = await orders.getAllUsersOrders();
  
    res.json({allUsersOrders:allUsersOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.adminGetAllUsersOrders = adminGetAllUsersOrders;
