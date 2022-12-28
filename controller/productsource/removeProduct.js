const authBcrypt = require("../../auth/bcrypt");
const productsource = require("../../models/sql/productsource");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const removeProduct = async (req, res, next) => {
    try {
        let removeProduct = await productsource.removeProductSource(req.body.productid);
      
  
               res.json({
            data: {type:'good',msg:'delete complete'},
          })
     
       

          return;
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
     return res.json({
        err: {type:"bad",msg:e.message}
      });
    }
  } 


module.exports.removeProduct = removeProduct;