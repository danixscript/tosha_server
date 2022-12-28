const admin = require("../../../models/sql/adminorders");
const providersSQL = require("../../../models/sql/providers");

const stats = require("../../../models/sql/adminStatistics");




// this is logg in function
const getStatsCon = async (req, res, next) => {
    try {
        let getAllEmployeesorders = await admin.selectEmpolyeeOrders();
        let dateTotalprice = await admin.selectDateTotalprice();
        let providers = await providersSQL.selectAllProvider();
        let topProductStats = await stats.getMostBuyingProductFromProvide(req.query.id);
        let mostBuyingProduct = await stats.getMostBuyingProduct(req.query.limit)
        let getTotalPricesOrders = await stats.getTotalPricesOrderFromProviders()




          res.json({
            data: getAllEmployeesorders[0],
            orders:dateTotalprice[0],
            providers:providers[0],
            topProductStats:topProductStats[0],
            mostBuyingProduct:mostBuyingProduct[0],
            getTotalPricesOrders:getTotalPricesOrders[0]
          })

          return;
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: e.message
      });
    }
  } 


module.exports.getStatsCon = getStatsCon;