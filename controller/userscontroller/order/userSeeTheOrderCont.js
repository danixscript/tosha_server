
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const userSeeTheOrderCont = async (req, res, next) => {
try {

  

  let userCheckTheOrder = await orders.userCheckTheOrderSQL(req.body.id);
  
    
    res.json({data:{msg:'yes',type:'good'}});

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.userSeeTheOrderCont = userSeeTheOrderCont;
