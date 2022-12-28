const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/users");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const createNewAccount = async (req, res, next) => {
try {
  
  const date = new Date();
  localStorage.setItem("isRemember", req.body.remember);

  let CheckingUserName = await users.selectUserByName(req.body.name);

  if (CheckingUserName[0].length > 0) {
  return res.json({err:"user username is alredy in used"});
  }

  let checkingUserEmail = await users.selectUserByEmail(req.body.email);

  if (checkingUserEmail[0].length > 0) {
  return res.json({err:"user email is alredy in used"});
  }
  


  // let data = await hapijoiCreate.createUserSchema({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //       passwordreapet:req.body.passwordreapet,

  // });

  
  let hash = await authbcrypt.hashPassport(req.body.password);
  let token = await jwt.makeToken({ hash: hash });


  let insertToBigBase = await users.insertNewUser(
    req.body.name,
    hash,
    req.body.email,
    date,
    req.body.phone,
    req.body.address
  );

  if (insertToBigBase) {
    let user = await users.selectUserByName(data.name);

    res.json({
         id:user[0][0].id
        ,userInfo:user[0][0],token:token
        ,remember:req.body.remember});
  }

} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.createNewAccount = createNewAccount;
