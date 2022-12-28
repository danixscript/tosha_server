const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const admin = require("../../models/sql/admin");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const removeEmployee = async (req, res, next) => {
try {
  
  await admin.removeEmployee(req.body.id);
  let errobj = {
    type:"good",
    msg:'you removed employee'
  }
  res.json({msg:errobj})

} catch (e) {
  console.log("::::",e)
  let errobj = {msg:"error noting change prop"+ e,type:'bad'}
  res.json({err:errobj,error:e}).status(500);
}
};

module.exports.removeEmployee = removeEmployee;
