const statistic = require("../../../../models/sql/adminStatistics");



// this is logg in function
const mostOrderdProductAdminOrder = async (req, res, next) => {
    try {
        let getAllProductNow = await statistic.getMostBuyingProduct(req.query.limit);
      
          res.json({
            topProducts: getAllProductNow[0],
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


module.exports.mostOrderdProductAdminOrder = mostOrderdProductAdminOrder;