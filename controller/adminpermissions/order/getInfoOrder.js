const adminorders = require("../../../models/sql/adminorders");



// this is logg in function
const getOrderInfo = async (req, res, next) => {
    try {
        let getAllOrdersNow = await adminorders.selectOrdersJoinById(req.query.orderid);
      
          res.json({
            allorders: getAllOrdersNow[0],
          })

          return;
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: {msg:e.message,type:'bad'}
      });
    }
  } 


module.exports.getOrderInfo = getOrderInfo;