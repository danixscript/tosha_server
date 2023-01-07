const pool = require("../sql/mysql2");



  
  const getAllMyProductsE = () => {
    return pool.execute(`SELECT * FROM myproducts where active = 1  `,);
  };


  
  const selectProductLike = (text,text1,text2,text3) => {
    return pool.execute(`
    SELECT * FROM toshproject.myproducts 
    
   WHERE itemname Like CONCAT("%", ? , "%")
    or type Like CONCAT("%", ? , "%")
    or price Like CONCAT("%", ? , "%")
    `,[text,text1,text2,text3]);
  };








  module.exports.getAllMyProductsE = getAllMyProductsE
  module.exports.selectProductLike = selectProductLike
  
 

  