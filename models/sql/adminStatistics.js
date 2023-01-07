const pool = require("./mysql2");

const getMostBuyingProductFromProvide = (id) => {
  return pool.execute(
    `SELECT orderinfoid, orderid,name, productname,providerid,productid, 
      SUM( quantity ) as quantity
            FROM  adminorderinfo 
               INNER JOIN providers on adminorderinfo.providerid = providers.id
            
            where providerid = ?
      
            GROUP BY productname order by quantity DESC`,
    [id]
  );
};

const getMostBuyingProduct = (limit) => {
  return pool.execute(
    `
      SELECT orderinfoid, orderid,name, productname,providerid,productid, 
    SUM( quantity ) as quantitysum
          FROM  adminorderinfo 
             INNER JOIN providers on adminorderinfo.providerid = providers.id
    
          GROUP BY productname
          order by  quantitysum DESC limit ?`,
    [limit]
  );
};


const getTotalPricesOrderFromProviders = () => {
  return pool.execute(
    `
      SELECT  *, 
SUM( totalprice ) as totalordersprice
      FROM  adminorder 
      	 INNER JOIN providers on adminorder.providerid = providers.id
      GROUP BY providername
      order by  totalordersprice DESC`,
    []
  );
};




module.exports.getTotalPricesOrderFromProviders = getTotalPricesOrderFromProviders;


module.exports.getMostBuyingProduct = getMostBuyingProduct;


module.exports.getMostBuyingProductFromProvide = getMostBuyingProductFromProvide;