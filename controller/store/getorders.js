
const orders = require("../../models/sql/sqlpools");


// this is create use rfunction

const getOrders = async (req, res, next) => {
try {
  




 

  let getAllMyOrders = await orders.selectAllOrders();
  
    console.log(getAllMyOrders[0])
    res.json({data:getAllMyOrders[0]});

  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getOrders = getOrders;
