const pool = require("./mysql2");


  const insertProvider = (name,agentname,address,phone,email,zipcode,cat) => {
    return pool.execute(
      `INSERT INTO tosha.providers 
      (name,agentname,address,phone,email,zipcode,cat) 
      VALUES 
      (?,?,?,?,?,?,?)`,
      [name,agentname,address,phone,email,zipcode,cat]
    );
  };
  
  const selectProviderByName = (name) => {
    return pool.execute(`SELECT * FROM tosha.providers WHERE name = ? `, [name]);
  };
  const selectAllProvider = () => {
    return pool.execute(`SELECT * FROM tosha.providers  `, );
  };


  const editProviderSQl = (name ,agentname  , address, phone ,email,zipcode,cat,id ) => {
    return pool.execute(` 
    UPDATE tosha.providers 
    SET name =  ?,agentname = ? , address= ?, phone = ? ,email=?,zipcode=?,cat=?
    WHERE id = ? `,[name ,agentname  , address, phone ,email,zipcode,cat,id] );
  };



const insertNewProduct = (name, providername, price) => {
    return pool.execute(
      `INSERT INTO productsource 
      (name, providername, price) 
      VALUES 
      (?,?,?)`,
      [name, providername, price]
    );
  };

  const removeProviderById = (id) => {
    return pool.execute(`DELETE  FROM tosha.providers WHERE id = ? `,[id] );
  };



  module.exports.insertNewProduct = insertNewProduct
  module.exports.insertProvider = insertProvider
  module.exports.selectProviderByName = selectProviderByName
  
  module.exports.removeProviderById = removeProviderById

  module.exports.selectAllProvider = selectAllProvider
  module.exports.editProviderSQl = editProviderSQl

  