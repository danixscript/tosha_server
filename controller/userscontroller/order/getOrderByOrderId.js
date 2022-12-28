
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const getorderByOrderIdFF = async (req, res, next) => {
try {
  



let uptofiftin = 0;
  

  let getAllMyOrders = await orders.getOrderByOrderIdSQL(req.query.id);

  if(getAllMyOrders[0].length > 0){
    uptofiftin=getAllMyOrders[0][0].uptofiftin 
  }
  
    
    res.json({data:getAllMyOrders[0],uptofiftin:uptofiftin});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getorderByOrderIdFF = getorderByOrderIdFF;
