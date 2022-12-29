const pool = require("../sql/mysql2");

const selectUser = () => {
  return pool.execute(`SELECT * FROM tosha.users `);
};
const selectUserByEmail = (email) => {
  return pool.execute(`SELECT * FROM tosha.users WHERE email = ? `, [email]);
};
const selectUserByName = (name) => {
  return pool.execute(`SELECT * FROM tosha.users WHERE name = ? `, [name]);
};
const selectUserByPasswordEmail = (password,email) => {
    return pool.execute(`SELECT * FROM tosha.users  WHERE password = ? AND email = ?`, [password,email]);
  };

const insertNewUser = (name, password, email, date, phone,address,band) => {
  return pool.execute(
    `INSERT INTO tosha.users 
    (name, password, email, date,phone,address,band) 
    VALUES 
    (?, ?, ?, ?, ?,?,?)`,
    [name, password, email, date, phone,address,band]
  );
};

const getUserById = (id) => {
  return pool.execute(`SELECT * FROM tosha.users  WHERE id = ? `, [id]);
};

const updateUser = (password, userName, email, phone, address, id) => {
  return pool.execute(
    `UPDATE tosha.users 
    SET password = ?,
    name =?,email =?,
    phone=?,address=?
    WHERE id = ? `,
    [password, userName, email, phone, address, id]
  );
};



const updateUserPassword = (pass,email) => {
  return pool.execute(
    `UPDATE tosha.users 
    SET password = ?
    WHERE email = ? `,
    [pass,email]
  );
};




module.exports.updateUserPassword = updateUserPassword;


module.exports.selectUser = selectUser;
module.exports.selectUserByPasswordEmail = selectUserByPasswordEmail;
module.exports.selectUserByEmail = selectUserByEmail;
module.exports.selectUserByName = selectUserByName;
module.exports.updateUser = updateUser;
module.exports.insertNewUser = insertNewUser;
module.exports.getUserById = getUserById;


