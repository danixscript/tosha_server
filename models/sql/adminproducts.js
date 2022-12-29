const pool = require("./mysql2");



  const insertCartOfProducts = (values) => {
    return pool.execute(
      `INSERT INTO providers 
      (idproduct,name,providerid,price,minimum,quantity,place,active) 
      VALUES 
      ?`,
      [values]
    );
  };
  const CheckAmount = (id) => {
    return pool.execute(
      `SELECT * FROM myproducts where id = ?
      
      `,
      [id]
    );
  };
  
  const selectProviderByName = (name) => {
    return pool.execute(`SELECT * FROM providers WHERE name = ? `, [name]);
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

  // const getAllMyProduct = () => {
  //   return pool.execute(
  //     `SELECT * FROM providers WHERE name = ?`,
  //     []
  //   );
  // };




//   צריך לעשות עוד גוין לטבלה של המוצרים 
  const selectProductsOrderJoinById = (id) => {
    return pool.execute(`SELECT *
    From adminorder 
    INNER JOIN  adminorderinfo
    ON adminorder.id = adminorderinfo.orderid where adminorder.id  = ? `,[id]);
  };



  // ???????????????????????????????????????????????

  const checkIfProductExist = (id,name) => {
    return pool.execute(
      `SELECT * FROM myproducts WHERE idproduct = ? AND itemname = ?`,
      [id,name]
    );
  };

  const insertNewProductToMytable = (idproduct, itemname, idprovider, price, minimum,quantity,place,active,productimg,providername,producttype) => {
    return pool.execute(
      `INSERT INTO myproducts 
      (idproduct, itemname, idprovider, price, minimum,
        quantity,place,active,productimg,providername,producttype) 
      VALUES 
      (?,?,?,?,?,?,?,?,?,?,?)`,
      [idproduct, itemname, idprovider, price, minimum,quantity,place,active,productimg,providername,producttype]
    ); 
  };

  const updateQuantityMyTable = (amount,id) => {
    return pool.execute(
      `
      UPDATE tosha.myproducts 
    SET quantity =  ?
    WHERE id = ?
      `,
      [amount,id]
    );
  };

  const updatePrice = (price,id) => {
    return pool.execute(
      `
      UPDATE tosha.myproducts 
    SET price =  ?
    WHERE id = ?
      `,
      [price,id]
    );
  };
  const updateMinPlace = (min,id) => {
    return pool.execute(
      `
      UPDATE tosha.myproducts 
    SET minimum =  ?
    WHERE id = ?
      `,
      [min,id]
    );
  };

  const activeProductToDisplay = (id) => {
    return pool.execute(
      `
      UPDATE tosha.myproducts 
    SET active =  1
    WHERE id = ?
      `,
      [id]
    );
  };

  const removeProductFromDisplay = (id) => {
    return pool.execute(
      `
      UPDATE tosha.myproducts 
    SET active =  0
    WHERE id = ?
      `,
      [id]
    );
  };
  
  const getAllMyProductsE = () => {
    return pool.execute(`SELECT * FROM myproducts  `,);
  };

  const getExpensiveProducts = () => {
    return pool.execute(`SELECT * FROM tosha.myproducts order by - price `,);
  };
  const notActiveProducts = () => {
    return pool.execute(`SELECT * FROM tosha.myproducts where active = 0 `,);
  };
  const getCheepProducts = () => {
    return pool.execute(`SELECT * FROM tosha.myproducts order by price  `,);
  };
  const getFinishdProductsSQL = () => {
    return pool.execute(`SELECT * FROM tosha.myproducts where quantity <= 0  `,);
  };
  const getAllProductudnderQuantity = () => {
    return pool.execute(`SELECT * FROM tosha.myproducts where quantity <= minimum  `,);
  };
  const deleteoneProduct = (id) => {
    return pool.execute(`DELETE  FROM myproducts WHERE id = ?  `,[id]);
  };
  // const getAllMyExpensiveProducts = () => {
  //   return pool.execute(`SELECT * FROM myproducts where pr `,);
  // };
  
  const selectProductLike = (text,text1,text2,text3) => {
    return pool.execute(`
    SELECT * FROM tosha.myproducts 
    
   WHERE itemname Like CONCAT("%", ? , "%")
    or place Like CONCAT("%", ? , "%")
    or active Like CONCAT("%", ? , "%")
    or providername Like CONCAT("%", ? , "%")
    `,[text,text1,text2,text3]);
  };








  const getProductFromMyProductWhereNameAndType = (name,type) => {
    return pool.execute(
      `SELECT * FROM myproducts WHERE itemname = ? AND producttype = ?`,
      [name,type]
    );
  };
  
  module.exports.notActiveProducts = notActiveProducts

  
  module.exports.getFinishdProductsSQL = getFinishdProductsSQL

  module.exports.getProductFromMyProductWhereNameAndType = getProductFromMyProductWhereNameAndType
  module.exports.removeProductFromDisplay = removeProductFromDisplay
  module.exports.getAllProductudnderQuantity = getAllProductudnderQuantity

  
  
  module.exports.deleteoneProduct = deleteoneProduct
  module.exports.getExpensiveProducts = getExpensiveProducts
  
  module.exports.activeProductToDisplay = activeProductToDisplay

  module.exports.getAllMyProductsE = getAllMyProductsE
  module.exports.updateMinPlace = updateMinPlace

  module.exports.selectProductLike = selectProductLike
  
  module.exports.updateQuantityMyTable = updateQuantityMyTable
  module.exports.getCheepProducts = getCheepProducts

  module.exports.updatePrice = updatePrice
  
  module.exports.insertNewProductToMytable = insertNewProductToMytable

  module.exports.insertNewProduct = insertNewProduct
  module.exports.selectProductsOrderJoinById = selectProductsOrderJoinById
  module.exports.insertCartOfProducts = insertCartOfProducts
  module.exports.selectProviderByName = selectProviderByName


  module.exports.checkIfProductExist = checkIfProductExist
  module.exports.CheckAmount = CheckAmount

  