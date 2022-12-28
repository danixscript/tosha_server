const pool = require("../sql/mysql2");

const getMostBuyingFromStore = () => {
    return pool.execute(
      `SELECT orderinfoid, userorderid,userproductname,userproductimg,userproductid, userproductprice,
      SUM( userproductquantity ) as quantity
            FROM  usersorderinfo 
            
            GROUP BY userproductname order by quantity DESC`,
      []
    );
  };

  const getAllOrdersByDate = () => {
    return pool.execute(
      `
      SELECT *
          FROM  userorders 
            
          order by  userorderdate DESC `,
      []
    );
  };  




        const getTotalCountOfOrders = () => {
          return pool.execute(
            `
         
  SELECT  *, 
  count( id ) as totalorders
        FROM  userorders `,
            []
          );
        };

  const getTotalPricesOrderFromAllUsers = () => {
    return pool.execute(
      `
      SELECT  *, 
SUM( orderprice ) as totalordersprice
      FROM  userorders 
      order by  totalordersprice DESC`,
      []
    );
  };

  const getSumAllOrdersTAandSIT = () => {
    return pool.execute(
      `
      SELECT  *, 
      COUNT( ordertype ) as orderssumintype
            FROM  userorders 
           group by ordertype  `,
      []
    );
  };
  
  
  module.exports.getTotalPricesOrderFromAllUsers = getTotalPricesOrderFromAllUsers;
  module.exports.getTotalCountOfOrders = getTotalCountOfOrders;

  
  module.exports.getAllOrdersByDate = getAllOrdersByDate;
  module.exports.getSumAllOrdersTAandSIT = getSumAllOrdersTAandSIT;


  module.exports.getMostBuyingFromStore = getMostBuyingFromStore;
