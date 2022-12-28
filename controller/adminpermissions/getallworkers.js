const authBcrypt = require("../../auth/bcrypt");
const admin = require("../../models/sql/admin");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const getAllEmployees = async (req, res, next) => {
    try {
        let getAllEmployees = await admin.selectAllEmployees();
      
          res.json({
            employees: getAllEmployees[0],
          })

          return;
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: e.message
      });
    }
  } 


module.exports.getAllEmployees = getAllEmployees;