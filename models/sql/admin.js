const pool = require("./mysql2");


const insertNewEmployee = (name, password, date, phone,permissions) => {
    return pool.execute(
      `INSERT INTO toshproject.admins 
      (name, password, date,phone,permissions) 
      VALUES 
      (?, ?, ?, ?,?)`,
      [name, password, date, phone,permissions]
    );
  };
  const selectEmployeeByEmail = (email) => {
    return pool.execute(`SELECT * FROM toshproject.admins WHERE email = ? `, [email]);
  };
  const getAllUsersSQL = () => {
    return pool.execute(`SELECT * FROM toshproject.users  `, []);
  };

  const bandUserSql = (id) => {
    return pool.execute(`UPDATE toshproject.users SET band = 1  where id = ?`, [id]);
  };
  const unBandUserSql = (id) => {
    return pool.execute(`UPDATE toshproject.users SET band = 0 where id = ? `, [id]);
  };
  const removeEmployee = (id) => {
    return pool.execute(`DELETE  FROM toshproject.admins WHERE id = ? `, [id]);
  };

  const selectAllEmployees = () => {
    return pool.execute(`SELECT * FROM toshproject.admins `,);
  };
  const selectEmployeeByName = (name) => {
    return pool.execute(`SELECT * FROM toshproject.admins WHERE name = ? `, [name]);
  };
  const updateEployeePhoneSQl = (phone,id) => {
    return pool.execute(`UPDATE toshproject.admins SET phone = ? WHERE id = ?`, [phone,id]);
  };
  const updateEployeePermmisionsSQl = (permissions,id) => {
    return pool.execute(`UPDATE toshproject.admins SET permissions = ? WHERE id = ?`, [permissions,id]);
  };
  const selectUserByPasswordName = (password,name) => {
    return pool.execute(`SELECT * FROM toshproject.admins  WHERE password = ? AND name = ?`, [password,name]);
  };

  const getEmployeeById = (id) => {
    return pool.execute(`SELECT * FROM toshproject.admins  WHERE id = ? `, [id]);
  };
  


  module.exports.bandUserSql = bandUserSql;
  module.exports.insertNewEmployee = insertNewEmployee;
  module.exports.selectUserByPasswordName = selectUserByPasswordName;
  module.exports.getEmployeeById = getEmployeeById;
  module.exports.selectEmployeeByEmail = selectEmployeeByEmail;
  module.exports.selectEmployeeByName = selectEmployeeByName;
  module.exports.selectAllEmployees = selectAllEmployees;
  module.exports.removeEmployee = removeEmployee;
  module.exports.getAllUsersSQL = getAllUsersSQL;
  module.exports.unBandUserSql = unBandUserSql;
  module.exports.updateEployeePhoneSQl = updateEployeePhoneSQl;
  module.exports.updateEployeePermmisionsSQl = updateEployeePermmisionsSQl;

  
  