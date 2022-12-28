const adminorder = require("../../../models/sql/adminorders");



// this is logg in function
const deleteOrder = async (req, res, next) => {
    try {
        let deleteorder = await adminorder.deleteOrder(req.body.orderid);
      
  
        let deleteOrderInfo = await adminorder.deleteOrderInfo(req.body.orderid);



        res.json({
            data: {type:'good',msg:'delete complete'},
          })
     
       

          return;
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
     return res.json({
        err: {type:"bad",msg:e.message}
      });
    }
  } 


module.exports.deleteOrder = deleteOrder;