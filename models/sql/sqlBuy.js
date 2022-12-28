const pool = require("./mysql2");

// inseret comments section 
const insertNewComment = (username, productid, rating, text, date, userid) => {
  return pool.execute(
    `INSERT INTO comments 
    (username, productid, rating, text, date,userid) 
    VALUES 
    (?, ?, ?, ?, ?,?)`,
    [username, productid, rating, text, date, userid]
  );
};

const deleteComment = (id, userid) => {
  return pool.execute(
    `DELETE FROM comments 
    WHERE id = ?, userid = ?`,
    [id, userid]
  );
  }

  const removeComment = (id) => {
    return pool.execute(
      `DELETE FROM comments 
      WHERE id = ?`,
      [id]
    );


};
const getCommentById = (id) => {
  return pool.execute(
    `SELECT * FROM comments 
    WHERE productid = ?`,
    [id]
  );


};


// inseret comments section done


// inseret orders sections 

const insertNewOrders = (clientid, adress, price, ispaid, datepaid, isdeliverd, datedeliverd, date, addres2, clientemail,clientname, state, country, phon, zipcode) => {
  return pool.execute(
    `INSERT INTO neworder 
    (clientid, adress, totalprice, ispaid, datepaid,
      isdeliverd, datedeliverd, date, addres2,
       clientemail,clientname, state, country, phon, zipcode) 
    VALUES 
    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [clientid, adress, price, ispaid, datepaid,
       isdeliverd, datedeliverd, date, addres2,
        clientemail,clientname, state, country, phon, zipcode]
  );
};



const selectOrderById = (id) => {
  return pool.execute(`SELECT * FROM neworder  WHERE id = ? `, [id]);
};
const selectOrderByClientId = (id) => {
  return pool.execute(`SELECT * FROM neworder  WHERE clientid = ? `, [id]);
};
const selectProductOrderById = (id) => {
  return pool.execute(`SELECT * FROM orderproducts  WHERE orderid = ? `, [id]);
};

// select join two tables 
const selectProductsOrderJoinById = (id) => {
  return pool.execute(`SELECT *
  From neworder 
  INNER JOIN  orderproducts
  ON neworder.id = orderproducts.orderid where neworder.id  = ? `,[id]);
};


const selectOrderJoinTables = (id) => {
  return pool.execute(`SELECT *
  From orderproducts 
  INNER JOIN neworder 
  ON orderproducts.orderid = neworder.id where clientid = ? `, [id]);
};


const selectProdufctsOrderJoinById = (id) => {
  return pool.execute(`SELECT *
  From neworder 
  INNER JOIN  orderproducts ON neworder.id = orderproducts.orderid 
  INNER JOIN  products ON orderproducts.productid = products.id 
  
  where neworder.id  = ? `,[id]);
};

//////////////////////////////////////////////////


const selectUserById = (id) => {
  return pool.execute(`SELECT * FROM users  WHERE password = ? `, [id]);
};

const getUserById = (id) => {
  return pool.execute(`SELECT * FROM users  WHERE id = ? `, [id]);
};

const updateUser = (password, userName, email, phon, view, userID) => {
  return pool.execute(
    `UPDATE users 
    SET password = ?,
    name =?,email =?,
    phon=?,view=?
    WHERE number = ? `,
    [password, userName, email, phon, view, userID]
  );
};

const selectSearchLike = (txt) => {
  return pool.execute(
    `select * from products where name Like ?
    or description Like ?
    `,
    [txt]
  );
};







const updateProduct = (name, description, cat, storeId, price, commends, likes, img, id) => {
  return pool.execute(
    `UPDATE products 
    SET name = ?,description = ?,
    cat = ?, storeId =? ,
    price = ? ,
    commends = ?,
     likes = ?,
     img = ?
    WHERE id = ? `,
    [name, description, cat, storeId, price, commends, likes, img, id]
  );
};
const updateProductWithoutImage = (name, description, cat, storeId, price, commends, likes, id) => {
  return pool.execute(
    `UPDATE products 
    SET name = ?,description = ?,
    cat = ?, storeId =? ,
    price = ? ,
    commends = ?,
     likes = ?
     
    WHERE id = ? `,
    [name, description, cat, storeId, price, commends, likes, id]
  );
};


// const updateCommend = (commends, id) => {
//   return pool.execute(
//     `UPDATE products 
//     SET 
//     commends = ?
   
//     WHERE id = ? `,
//     [commends, id]
//   );
// };

const updateLikes = (like, id) => {
  return pool.execute(
    `UPDATE products 
    SET 
    likes = ?
   
    WHERE id = ? `,
    [like, id]
  );
};



// const selectProduct = () => {
//   return pool.execute(`SELECT * FROM product WHERE name = ? OR cat = ? `);
// };




// start the order section 



const updateOrderPay = (ispaid, datepaid, id) => {
  return pool.execute(
    `UPDATE storeapp.order 
    SET 
    ispaid = ? , datepaid = ?
   
    WHERE id = ? `,
    [ispaid, datepaid, id]
  );
};



const insertNewOrder2 = (username, useremail, userid, products, shipping, price, yourDate, ispaid, datepaid, isdeliverd, datedeliverd) => {
  return pool.execute(
    `INSERT INTO storeapp.order
    (username , useremail, userid, products, shipping,  price,date,  ispaid , datepaid , isdeliverd , datedeliverd) 
    VALUES 
    (?, ?, ?, ?,?, ? , ? , ? , ? , ? , ? )`,
    [username, useremail, userid, products, shipping, price, yourDate, ispaid, datepaid, isdeliverd, datedeliverd]
  );
};


// const getMyOrder = (id) => {
//   return pool.execute(`SELECT * FROM order WHERE userid = ? `, [id]);
// };

const getMyOrderByOrderId = (id) => {
  return pool.execute(`SELECT * FROM storeapp.order WHERE id = ? `, [id]);
};


module.exports.selectOrderJoinTables = selectOrderJoinTables;
module.exports.selectOrderByClientId = selectOrderByClientId;
// module.exports.insertNewProductOrders2 = insertNewProductOrders2;




module.exports.removeComment = removeComment;



module.exports.selectProductsOrderJoinById = selectProductsOrderJoinById;
module.exports.selectOrderById = selectOrderById;


module.exports.getMyOrderByOrderId = getMyOrderByOrderId;



// module.exports.getMyOrder = getMyOrder;
module.exports.updateProductWithoutImage = updateProductWithoutImage;

module.exports.selectProductOrderById = selectProductOrderById;


module.exports.selectUserById = selectUserById;
module.exports.updateLikes = updateLikes;

module.exports.updateOrderPay = updateOrderPay;

module.exports.updateUser = updateUser;

module.exports.getUserById = getUserById;



module.exports.updateProduct = updateProduct;



// module.exports.updateCommend = updateCommend;



module.exports.selectSearchLike = selectSearchLike;


module.exports.insertNewOrder2 = insertNewOrder2;

module.exports.insertNewOrders = insertNewOrders;

// module.exports.insertNewProductOrders = insertNewProductOrders;

module.exports.deleteComment = deleteComment;

module.exports.insertNewComment = insertNewComment;
module.exports.getCommentById = getCommentById;


module.exports.selectProdufctsOrderJoinById = selectProdufctsOrderJoinById;


  
