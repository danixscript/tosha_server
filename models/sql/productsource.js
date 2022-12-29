const pool = require("./mysql2");
const getAllProduct = () => {
    return pool.execute(`SELECT * FROM tosha.productsource `);
  };

const selectProductSourceById = (id) => {
    return pool.execute(`SELECT * FROM productsource  WHERE productid = ? `, [id]);
  };
  const selectProductSourceByName = (name) => {
    return pool.execute(`SELECT * FROM productsource  WHERE productname = ? `, [name]);
  };

  const selectProductSourceByNameANDProvider = (name,id) => {
    return pool.execute(`SELECT * FROM productsource  WHERE productname = ? AND providersid = ?`, [name,id]);
  };
  
  const selectAllProductSource = () => {
    return pool.execute(`SELECT * FROM productsource`);
  };
  const selectProductSourceByNameAndProvider = (name,id) => {
    return pool.execute(`SELECT * FROM productsource  WHERE productname = ? And providersid =? `, [name,id]);
  };
  const insertNewProduct = (name,providerid,price,productimg,producttype) => {
    return pool.execute(
      `INSERT INTO productsource 
      (productname,providersid,price,productimg,type) 
      VALUES 
      (?,?,?,?,?)`,
      [name,providerid,price,productimg,producttype]
    );
  };
  const selectProductsByProvider = (id) => {
    return pool.execute(`SELECT * FROM tosha.productsource 
    INNER JOIN tosha.providers 
    ON tosha.productsource.providersid = providers.id
    where providersid = ? `, [id]);
  };
  const selectProductSourceJoinByProviderId = (id) => {
    return pool.execute(`SELECT * FROM tosha.productsource 
    INNER JOIN tosha.providers 
    ON tosha.productsource.providersid = providers.id WHERE productsource.productid = ?`,[id]);
  };
  const selectAllProductSourceJoinByProvider = () => {
    return pool.execute(`SELECT * FROM tosha.productsource 
    INNER JOIN tosha.providers 
    ON tosha.productsource.providersid = providers.id `);
  };

  const deleteAllProductByProvider = (id) => {
    return pool.execute(`DELETE  FROM tosha.productsource WHERE providersid = ?`,[id]);
  };
  const removeProductSource = (id) => {
    return pool.execute(`DELETE FROM tosha.productsource WHERE productid = ?`,[id]);
  };

  // const selectProductLike = (text,text1,text2,id) => {
  //   return pool.execute(`
  //   SELECT * FROM tosha.productsource 
  //   INNER JOIN tosha.providers 
  //   ON tosha.productsource.providersid = providers.id
  //   WHERE tosha.productsource.productname Like CONCAT("%", ? , "%")
  //   or tosha.providers.name Like CONCAT("%", ? , "%")
  //   or tosha.providers.cat Like CONCAT("%", ? , "%")
  //   AND providersid = ?
  //   `,[text,text1,text2,id]);
  // };

  const selectProductLike = (id,text) => {
    return pool.execute(` SELECT * FROM tosha.productsource 
    INNER JOIN tosha.providers 
    ON tosha.productsource.providersid = providers.id
    WHERE
    providersid = ? AND 
    tosha.productsource.productname Like CONCAT("%", ? , "%")
    `,[id,text]);
  };


  module.exports.selectProductLike =selectProductLike

  
  
  module.exports.selectProductSourceById =selectProductSourceById
module.exports.removeProductSource = removeProductSource
  module.exports.selectProductSourceByNameAndProvider =selectProductSourceByNameAndProvider
  
  module.exports.selectProductsByProvider =selectProductsByProvider

  module.exports.selectProductSourceJoinByProviderId =selectProductSourceJoinByProviderId

  module.exports.selectProductSourceByNameANDProvider =selectProductSourceByNameANDProvider

  module.exports.selectProductSourceByName =selectProductSourceByName

  module.exports.selectAllProductSource =selectAllProductSource

  module.exports.insertNewProduct =insertNewProduct
  module.exports.selectAllProductSourceJoinByProvider =selectAllProductSourceJoinByProvider

  module.exports.getAllProduct = getAllProduct

  module.exports.deleteAllProductByProvider = deleteAllProductByProvider

  