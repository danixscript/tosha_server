const pool = require("./mysql2");

const insertNewOrders = (price, date, employeeid,active,name,providerid,providername) => {
    return pool.execute(
      `INSERT INTO toshproject.adminorder 
      (totalprice, date, employeeid,activeorder,employeename,providerid,providername) 
      VALUES 
      (?,STR_TO_DATE(?, "%m-%d-%Y %H:%i:%s"),?,?,?,?,?)`,
      [price, date, employeeid,active,name,providerid,providername]
    );
  };

//   צריך לעשות עוד גוין לטבלה של המוצרים 
  const selectOrdersJoin = () => {
    return pool.execute(`SELECT *
    From adminorder 
    INNER JOIN  adminorderinfo
    ON adminorder.adminorderid = adminorderinfo.orderid `,[]);
  };
  const selectEmpolyeeOrders = () => {
    return pool.execute(` SELECT adminorderid,employeename,count(employeeid) as ordersnumber
    FROM toshproject.adminorder   group by employeename `,[]);
  };

  // זה ביחד ................................. 
  const selectDateTotalprice = () => {
    return pool.execute(` SELECT DATE_FORMAT(date, "%d/%m/%Y %h:%i %p") as date,totalprice,name FROM toshproject.adminorder 
    INNER JOIN  providers
    ON adminorder.providerid = providers.id
    ; `,[]);
  };

  

    // SELECT DATE_FORMAT(date, "%d/%m/%Y %h:%i %p") as date,totalprice,name FROM toshproject.adminorder 
    // INNER JOIN  providers
    // ON adminorder.providerid = providers.id group by date
    
  // .................................. 

  const selectOrdersJoinById = (id) => {
    return pool.execute(`SELECT *
    From adminorder 
    INNER JOIN  adminorderinfo
    ON adminorder.adminorderid = adminorderinfo.orderid where adminorderid = ? `,[id]);
  };
  const selectOrdersJoinByIdWhere = () => {
    return pool.execute(`SELECT *
    From adminorder WHERE activeorder = 0 `,[]);
  };
  const selectAllOrders = () => {
    return pool.execute(`SELECT *
    From adminorder  `,[]);
  };

  const selectAllOrdersByProvider = (id) => {
    return pool.execute(`SELECT * From toshproject.adminorder  where providerid = ?`,[id]);
  };

  const deleteOrder = (id) => {
    return pool.execute(`DELETE 
    From adminorder WHERE adminorderid = ? `,[id]);
  };

  const deleteOrderInfo = (id) => {
    return pool.execute(`DELETE 
    From adminorderinfo WHERE orderid = ? `,[id]);
  };

  const selectOrderByDate = () => {
    return pool.execute(`  SELECT * FROM toshproject.adminorder order by  date DESC  
    `,[]);
  };
  const getNotActiveOrders = () => {
    return pool.execute(`  SELECT * FROM toshproject.adminorder where activeorder = 0
    `,[]);
  };
  const getExpensiveProducts = () => {
    return pool.execute(`SELECT * FROM toshproject.adminorder order by - totalprice `,);
  };
  const getCheepestProducts = () => {
    return pool.execute(`SELECT * FROM toshproject.adminorder order by  totalprice `,);
  };

  module.exports.selectOrderByDate = selectOrderByDate
  module.exports.getExpensiveProducts = getExpensiveProducts
  module.exports.getCheepestProducts = getCheepestProducts
  module.exports.selectAllOrdersByProvider = selectAllOrdersByProvider

  
  module.exports.selectAllOrders = selectAllOrders
  module.exports.deleteOrder = deleteOrder
  module.exports.deleteOrderInfo = deleteOrderInfo
  module.exports.selectEmpolyeeOrders = selectEmpolyeeOrders
  module.exports.selectDateTotalprice = selectDateTotalprice

  
  module.exports.insertNewOrders = insertNewOrders
  module.exports.selectOrdersJoin = selectOrdersJoin
  module.exports.selectOrdersJoinById = selectOrdersJoinById
  module.exports.selectOrdersJoinByIdWhere = selectOrdersJoinByIdWhere;
  module.exports.getNotActiveOrders = getNotActiveOrders;

  