
const orders = require("../../../models/userssql/orders");


// get orders by client id 

const desableOrderController = async (req, res, next) => {
try {
  

  let getAllMyOrders = await orders.desableOrderSql(req.body.id); 
  
    if(getAllMyOrders[0].affectedRows >0){
            res.json({data:'good',msg:{type:'good',msg:"ביטלת הזמנה הלקוח מיד יקבל הודעה"}});

    }else{
        res.json({data:'bad',msg:{type:'bad',msg:"     שום דבר לא השתנה"}});

    }

  
 



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.desableOrderController = desableOrderController;
