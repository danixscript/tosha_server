const adminorders = require("../../../../models/sql/adminorders");



// this is logg in function
const getOrdersByDate = async (req, res, next) => {
    try {
        let getAllOrdersNow = await adminorders.selectOrderByDate();
      
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


module.exports.getOrdersByDate = getOrdersByDate;