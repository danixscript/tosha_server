const pool = require("./mysql2");

const selectUser = () => {
  return pool.execute(`SELECT * FROM users `);
};
const selectUserByEmail = (email) => {
  return pool.execute(`SELECT * FROM users WHERE email = ? `, [email]);
};
const selectUserByName = (name) => {
  return pool.execute(`SELECT * FROM users WHERE name = ? `, [name]);
};
const selectUserByPasswordEmail = (password,email) => {
    return pool.execute(`SELECT * FROM users  WHERE password = ? AND email = ?`, [password,email]);
  };

const insertNewUser = (name, password, email, date, phone,address) => {
  return pool.execute(
    `INSERT INTO users 
    (name, password, email, date,phone,address) 
    VALUES 
    (?, ?, ?, ?, ?,?)`,
    [name, password, email, date, phone,address]
  );
};

const getUserById = (id) => {
  return pool.execute(`SELECT * FROM users  WHERE id = ? `, [id]);
};

const updateUser = (password, userName, email, phone, address, id) => {
  return pool.execute(
    `UPDATE users 
    SET password = ?,
    name =?,email =?,
    phone=?,address=?
    WHERE id = ? `,
    [password, userName, email, phone, address, id]
  );
};



module.exports.selectUser = selectUser;
module.exports.selectUserByPasswordEmail = selectUserByPasswordEmail;
module.exports.selectUserByEmail = selectUserByEmail;
module.exports.selectUserByName = selectUserByName;
module.exports.updateUser = updateUser;
module.exports.insertNewUser = insertNewUser;
module.exports.getUserById = getUserById;


