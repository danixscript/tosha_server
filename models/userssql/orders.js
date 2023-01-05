const pool = require("../sql/mysql2");

const insertNewOrdersUsersss = (userid, orderprice, date,useremail,active,ordertype,uptofiftin,usersee,text) => {
    return pool.execute(
      `INSERT INTO toshproject.userorders 
      (userid, orderprice, userorderdate,useremail,active,ordertype,uptofiftin,usersee,text) 
      VALUES 
      (?,?,STR_TO_DATE(?, "%m-%d-%Y %H:%i:%s"),?,?,?,?,?,?)`,
      [userid, orderprice, date,useremail,active,ordertype,uptofiftin,usersee,text]
    );
  };


    const getNotActiveOrders = () => {
    return pool.execute(`  SELECT * FROM toshproject.userorders where active = 0 
    `,[]);
  };

  const getNotActiveOrdersAndUpto = () => {
    return pool.execute(`  SELECT * FROM toshproject.userorders where active = 0  AND uptofiftin = 1
    `,[]);
  };





  const userCheckTheOrderSQL = (id) => {
    return pool.execute(`  UPDATE toshproject.userorders SET usersee = 0 where id = ?
    `,[id]);
  };






  const getAllUsersOrders = () => {
    return pool.execute(`  SELECT * FROM toshproject.userorders order by  userorderdate DESC
    `,[]);
  };
  const getUserNotActiveOrderById = (id) => {
    return pool.execute(`  SELECT * FROM toshproject.userorders where active = 0  AND userid = ?
    `,[id]);
  };
  const getOrderByOrderIdSQL = (id) => {
    return pool.execute(`  SELECT * FROM toshproject.usersorderinfo   INNER JOIN  userorders   ON usersorderinfo.userorderid = userorders.id where  userorderid = ?
    `,[id]);
  };
  const getOrderInfoJoin = (id) => {
    return pool.execute(`  SELECT *
    From userorders 
    INNER JOIN  usersorderinfo
    ON userorders.id = usersorderinfo.userorderid where id = ?
    `,[id]);
  };

  const getUserOrdersByUserId = (id) => {
    return pool.execute(`  SELECT DATE_FORMAT(userorderdate, "%d/%m/%Y %h:%i %p") as date,id,userid,orderprice,ordertype,useremail,active,uptofiftin FROM toshproject.userorders 
  
    
    where  userid = ?
    `,[id]);
  };





  const acceptUserOrder = (id) => {
    return pool.execute(`UPDATE toshproject.userorders 
    SET uptofiftin = 0
    
    WHERE id = ?`,[id]);
  };

  const userPayForOrder = (text,id,userid) => {
    return pool.execute(`UPDATE toshproject.userorders 
    SET text = ?, active = 1
    
    WHERE id = ? AND userid =?`,[text,id,userid]);
  };
  


  const desableOrderSql = (id) => {
    return pool.execute(`UPDATE toshproject.userorders 
    SET uptofiftin = null,usersee = 1
    
    WHERE id = ?`,[id]);
  };


  module.exports.getNotActiveOrdersAndUpto = getNotActiveOrdersAndUpto
  module.exports.getOrderByOrderIdSQL = getOrderByOrderIdSQL
  
  module.exports.desableOrderSql = desableOrderSql
  module.exports.userCheckTheOrderSQL = userCheckTheOrderSQL

  module.exports.insertNewOrdersUsersss = insertNewOrdersUsersss
  module.exports.getNotActiveOrders = getNotActiveOrders
  
  module.exports.getUserNotActiveOrderById = getUserNotActiveOrderById
  module.exports.getUserOrdersByUserId = getUserOrdersByUserId
  module.exports.getAllUsersOrders = getAllUsersOrders
  module.exports.getOrderInfoJoin = getOrderInfoJoin
  module.exports.acceptUserOrder = acceptUserOrder
  module.exports.userPayForOrder = userPayForOrder

  