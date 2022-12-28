const admin = require("../../../models/sql/adminorders");
const stateOfStore = require("../../../models/userssql/statsOfStore");
const stats = require("../../../models/sql/adminStatistics");




// this is logg in function
const getStatsOfStore = async (req, res, next) => {
    try {
        let getMostBuyingProducts = await stateOfStore.getMostBuyingFromStore();
        let allordersorderingByDate = await stateOfStore.getAllOrdersByDate();
        let allStoreSells = await stateOfStore.getTotalPricesOrderFromAllUsers();
        let totalCountOfOrder = await stateOfStore.getTotalCountOfOrders();

        let TAvsSit = await stateOfStore.getSumAllOrdersTAandSIT(); 


        let allAdminOrders = await admin.selectOrderByDate();
    


          res.json({
            getMostBuyingProducts: getMostBuyingProducts[0],
            allordersorderingByDate:allordersorderingByDate[0],
            allAdminOrders:allAdminOrders[0],
            TAvsSit:TAvsSit[0],
            allStoreSells:allStoreSells[0][0].totalordersprice,
            totalCountOfOrder:totalCountOfOrder[0][0].totalorders
      
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


module.exports.getStatsOfStore = getStatsOfStore;