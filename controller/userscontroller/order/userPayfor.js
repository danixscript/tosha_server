
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const userPayForOrder = async (req, res, next) => {
try {
  




  

  let getAllMyOrders = await orders.userPayForOrder(req.body.text,req.body.orderid,req.body.userid);
  
  if(getAllMyOrders[0].affectedRows > 0){
    return res.json({data:'good',msg:{type:'good',msg:"pay good"}});

  }
    
 return   res.json({data:getAllMyOrders[0]});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.userPayForOrder = userPayForOrder;
