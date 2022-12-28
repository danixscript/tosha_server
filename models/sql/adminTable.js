const pool = require("./mysql2");




  const getAllProductFromOrder = (id) => {
    return pool.execute(`SELECT *
    From  adminorderinfo
    INNER JOIN  adminorder
    ON adminorderinfo.orderid = adminorder.adminorderid
    INNER JOIN  providers
    ON adminorderinfo.providerid = providers.id
     where adminorder.adminorderid  = ? `,[id]);
  };

  const updateOrder = (id) => {
    return pool.execute(`UPDATE adminorder 
    SET activeorder = 1
    WHERE adminorderid = ?`,[id]);
  };

  module.exports.getAllProductFromOrder = getAllProductFromOrder
  module.exports.updateOrder = updateOrder

  


  