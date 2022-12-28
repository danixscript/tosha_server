const pool = require("./mysql2");

const selectUser = () => {
  return pool.execute(`SELECT * FROM users `);
};

const cheakUserEmail = (email) => {
  return pool.execute(`SELECT * FROM users WHERE email = ? `, [email]);
};
const cheakUserName = (name) => {
  return pool.execute(`SELECT * FROM users WHERE name = ? `, [name]);
};

const cheakStorerName = (name) => {
  return pool.execute(
    `SELECT * FROM users WHERE name = ? AND isStore = 'yes'`,
    [name]
  );
};

// to Restore my password

const cheakUserEmailAndName = (name, email) => {
  return pool.execute(`SELECT * FROM users WHERE name = ? AND email = ? `, [
    name,
    email,
  ]);
};

const delproductbyid = (id, storeId) => {
  return pool.execute(`DELETE  FROM products where id = ? AND storeId = ?  `, [
    id,
    storeId,
  ]);
};
const delproduct = (id) => {
  return pool.execute(`DELETE  FROM products where id = ?   `, [id]);
};

const selectProductById = (id) => {
  return pool.execute(`SELECT * FROM products where storeId = ? `, [id]);
};
const selectOrderById = (id) => {
  return pool.execute(`SELECT * FROM storeapp.order where userid = ? `, [id]);
};

const selectAllOrders = () => {
  return pool.execute(`SELECT * FROM storeapp.order  `);
};
const selectOrderByPId = (id) => {
  return pool.execute(`SELECT * FROM storeapp.order where id = ? `, [id]);
};
const getProductById = (id) => {
  return pool.execute(`SELECT * FROM products where id = ? `, [id]);
};

const getAllProduct = () => {
  return pool.execute(`SELECT * FROM products  `);
};
const insertNewitem = (name, description, cat, storeId, price, commends, likes, img) => {
  return pool.execute(
    `INSERT INTO products 
    (name,description, cat, storeId, price,commends,likes,img) 
    VALUES 
    (?, ?, ?, ?, ?,?,?,?)`,
    [name, description, cat, storeId, price, commends, likes, img]
  );
};

const insertNewUser = (name, password, email, date, isStore) => {
  return pool.execute(
    `INSERT INTO users 
    (name, password, email, date,isStore) 
    VALUES 
    (?, ?, ?, ?, ?)`,
    [name, password, email, date, isStore]
  );
};

// const insertNewItem =
// (name, password, email, date,isStore) => {
//   return pool.execute(
//     `INSERT INTO users
//     (name, password, email, date,isStore)
//     VALUES
//     (?, ?, ?, ?, ?)`,
//     [name, password, email, date,isStore]
//   );
// };



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

const selectLike = (txt) => {
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
    [name, description, cat, storeId, price, commends, likes , id]
  );
};


const updateCommend = (commends, id) => {
  return pool.execute(
    `UPDATE products 
    SET 
    commends = ?
   
    WHERE id = ? `,
    [commends, id]
  );
};

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



const updateOrderPay = (ispaid,datepaid, id) => {
  return pool.execute(
    `UPDATE storeapp.neworder 
    SET 
    ispaid = ? , datepaid = ?
   
    WHERE id = ? `,
    [ispaid,datepaid, id]
  );
};

const insertNewOrder = (username, useremail, userid, products, shipping, price, ispaid, datepaid, isdeliverd, datedeliverd) => {
  return pool.execute(
    `INSERT INTO storeapp.order
    (username , useremail, userid, products, shipping,  price,  ispaid , datepaid , isdeliverd , datedeliverd) 
    VALUES 
    (?, ?, ?, ?, ? , ? , ? , ? , ? , ? )`,
    [username, useremail, userid, products, shipping, price, ispaid, datepaid, isdeliverd, datedeliverd]
  );
};

const insertNewOrder2 = (username, useremail, userid, products, shipping, price,yourDate, ispaid, datepaid, isdeliverd, datedeliverd) => {
  return pool.execute(
    `INSERT INTO storeapp.order
    (username , useremail, userid, products, shipping,  price,date,  ispaid , datepaid , isdeliverd , datedeliverd) 
    VALUES 
    (?, ?, ?, ?,?, ? , ? , ? , ? , ? , ? )`,
    [username, useremail, userid, products, shipping, price,yourDate, ispaid, datepaid, isdeliverd, datedeliverd]
  );
};


const getMyOrder = (id) => {
  return pool.execute(`SELECT * FROM order WHERE userid = ? `, [id]);
};

const getMyOrderByOrderId = (id) => {
  return pool.execute(`SELECT * FROM storeapp.neworder WHERE id = ? `, [id]);
};






module.exports.getMyOrderByOrderId = getMyOrderByOrderId;


module.exports.getMyOrder = getMyOrder;
module.exports.updateProductWithoutImage = updateProductWithoutImage;



module.exports.selectUser = selectUser;
module.exports.selectUserById = selectUserById;
module.exports.updateLikes = updateLikes;

module.exports.updateOrderPay = updateOrderPay;

module.exports.cheakUserEmail = cheakUserEmail;
module.exports.cheakUserName = cheakUserName;
module.exports.updateUser = updateUser;
module.exports.cheakUserEmailAndName = cheakUserEmailAndName;
module.exports.insertNewUser = insertNewUser;
module.exports.cheakStorerName = cheakStorerName;
module.exports.insertNewitem = insertNewitem;
module.exports.selectProductById = selectProductById;
module.exports.delproduct = delproduct;
module.exports.getUserById = getUserById;
module.exports.getProductById = getProductById;

module.exports.getAllProduct = getAllProduct;
module.exports.selectOrderByPId = selectOrderByPId;


module.exports.updateProduct = updateProduct;

module.exports.delproductbyid = delproductbyid;


module.exports.updateCommend = updateCommend;
module.exports.selectOrderById = selectOrderById;



module.exports.selectLike = selectLike;


module.exports.insertNewOrder2 = insertNewOrder2;

module.exports.insertNewOrder = insertNewOrder;

module.exports.selectAllOrders = selectAllOrders;

