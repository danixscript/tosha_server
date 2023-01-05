const admin = require("../../models/sql/admin");



// this is logg in function
const updateEmployeepermissions = async (req, res, next) => {
    try {



        let updatePermissions = await admin.updateEployeePermmisionsSQl(req.body.permissionsSElect,req.body.id);
      
          res.json({
            msg: 'good',
          })

          return;
         
     
    } catch (e) {
      console.log("error in the server side ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: e.message
      });
    }
  } 


module.exports.updateEmployeepermissions = updateEmployeepermissions;