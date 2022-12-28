const statisticSheilta = require("../../../../models/sql/adminStatistics");



// this is logg in function
const getTopProductFromProvider = async (req, res, next) => {
    try {
        let getAllProducts = await statisticSheilta.getMostBuyingProductFromProvide(req.query.id);
      
          res.json({
            topProducts: getAllProducts[0],
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


module.exports.getTopProductFromProvider = getTopProductFromProvider;