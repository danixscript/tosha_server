const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const admin = require("../../models/sql/admin");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const createNewAccount = async (req, res, next) => {
try {
  
  const date = new Date();
  localStorage.setItem("isRemember", req.body.data.remember);

  let CheckingUserName = await admin.selectEmployeeByName(req.body.data.name);

  if (CheckingUserName[0].length > 0) {
    let errobj = {
      msg:'שם המשתמש כבר תפוס',
      type:'bad',

    }
  return res.json({err:errobj});
  }

  
  // let data = await hapijoiCreate.createUserSchema({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //       passwordreapet:req.body.passwordreapet,

  // });

  
  let hash = await authbcrypt.hashPassport(req.body.data.password);
  let token = await jwt.makeToken({ hash: hash });
  let insertToBigBase = await admin.insertNewEmployee(
    req.body.data.name,
    hash,
    date,
    req.body.data.phone,
    req.body.data.permissions
  );

  if (insertToBigBase) {
    let user = await admin.selectEmployeeByName(req.body.data.name);
let goddmsg = {
  type:'good',
  msg:"הצלחת לחבר עובד חדש"
}
    res.json({
      msg:goddmsg,
         id:user[0][0].id
        ,adminInfo:user[0][0],
        token:token
        ,remember:req.body.data.remember});
  }

} catch (e) {
  console.log("::::",e)
  let errobj = {msg:"error unvalid prop"+ e,type:'bad'}
  res.json({err:errobj,error:e}).status(500);
}
};

module.exports.createNewAccount = createNewAccount;
