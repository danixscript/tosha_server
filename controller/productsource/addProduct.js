const authBcrypt = require("../../auth/bcrypt");
const productsource = require("../../models/sql/productsource");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const addProduct = async (req, res, next) => {
    try {

        let findProduct = await productsource.selectProductSourceByNameANDProvider(req.body.name,req.body.providersid)

     if(findProduct[0].length>0){
      return res.json({err:{type:'bad',msg:'product is used by the same provider'}})

     }else{
      let addProduct = await productsource.insertNewProduct(req.body.name,req.body.providersid,req.body.price,req.body.productimg,req.body.producttype);
      let getProductJoin = await productsource.selectProductSourceJoinByProviderId(addProduct[0].insertId);

        res.json({
          data: getProductJoin[0][0],
          msg:{type:'good',msg:'הכנסת מוצר חדש'}
        })
     }

          return;
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
     return res.json({
        err: {type:"bad",msg:e.message}
      });
    }
  } 


module.exports.addProduct = addProduct;