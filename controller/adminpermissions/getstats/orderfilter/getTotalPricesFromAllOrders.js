const statistic = require("../../../../models/sql/adminStatistics");



// this is logg in function
const getTotalPricesFromAllOrders = async (req, res, next) => {
    try {
        let getAllOrdersNow = await statistic.getTotalPricesOrderFromProviders();
      
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


module.exports.getTotalPricesFromAllOrders = getTotalPricesFromAllOrders;