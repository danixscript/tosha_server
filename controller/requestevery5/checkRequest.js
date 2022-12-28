const adminorders = require("../../models/sql/adminorders");
const usersorders = require("../../models/userssql/orders");
const adminproducts = require("../../models/sql/adminproducts");

const adminmaterials = require("../../models/sql/adminMaterials");



// this is logg in function
const checkRequest = async (req, res, next) => {
    try {
        let notActiveOrder = await adminorders.selectOrdersJoinByIdWhere();
        let userNotActiveOrders = await usersorders.getNotActiveOrdersAndUpto();
        let productfinished = await adminproducts.getAllProductudnderQuantity();
        let materialfinished = await adminmaterials.getAllMaterialsUnderQuantity();

      
          res.json({
            activeOrders: notActiveOrder[0],
            usersOrder:userNotActiveOrders[0],
            productfinished:productfinished[0],
            materialfinished:materialfinished[0]
          })

         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: {msg:e.message,type:'bad'}
      });
    }
  } 


module.exports.checkRequest = checkRequest;