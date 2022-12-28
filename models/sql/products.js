const pool = require("./mysql2");
const getAllProduct = () => {
    return pool.execute(`SELECT * FROM toshproject.productsource `);
  };

const selectProductSourceById = (id) => {
    return pool.execute(`SELECT * FROM productssource  WHERE id = ? `, [id]);
  };
  const selectAllProductSource = () => {
    return pool.execute(`SELECT * FROM productssource`);
  };
  const selectProductSourceByNameAndProvider = (name,id) => {
    return pool.execute(`SELECT * FROM productssource  WHERE name = ? And providersid =? `, [name,id]);
  };
  const insertNewProduct = (name,providerid,price) => {
    return pool.execute(
      `INSERT INTO productssource 
      (name,providerid,price) 
      VALUES 
      (?,?,?)`,
      [name,providerid,price]
    );
  };
  const selectAllProductSourceJoin = () => {
    return pool.execute(`SELECT * FROM productssource 
    INNER JOIN providers 
    ON productssource.providersid = providers.id `);
  };

  module.exports.selectProductSourceById =selectProductSourceById

  module.exports.selectProductSourceByNameAndProvider =selectProductSourceByNameAndProvider
  
  module.exports.selectAllProductSource =selectAllProductSource

  module.exports.insertNewProduct =insertNewProduct
  module.exports.selectAllProductSourceJoin =selectAllProductSourceJoin

  module.exports.getAllProduct = getAllProduct
