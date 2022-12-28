const authbcrypt = require("../../../auth/bcrypt");
const users = require("../../../models/userssql/usersRegister");
const jwt = require("../../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const createNewAccount = async (req, res, next) => {
  try {

    const date = new Date();

    localStorage.setItem("isRemember", req.body.remember);

    let CheckingUserName = await users.selectUserByName(req.body.name);

    if (CheckingUserName[0].length > 0) {
      return res.json({
        err: "user username is alredy in used"
      });
    }

    let checkingUserEmail = await users.selectUserByEmail(req.body.email);

    if (checkingUserEmail[0].length > 0) {
      return res.json({
        err: "user email is alredy in used"
      });
    }



    // let data = await hapijoiCreate.createUserSchema({
    //       name: req.body.name,
    //       email: req.body.email,
    //       password: req.body.password,
    //       passwordreapet:req.body.passwordreapet,

    // });


    let hash = await authbcrypt.hashPassport(req.body.password);
    let token = await jwt.makeToken({
      hash: hash
    });


    let insertToBigBase = await users.insertNewUser(
      req.body.name,
      hash,
      req.body.email,
      date,
      req.body.phone,
      req.body.address,
      0
    );

    if (insertToBigBase) {
      let user = await users.selectUserByName(req.body.name);
      req.body.id = insertToBigBase[0].insertId
      res.json({
        id: insertToBigBase[0].insertId,
        userInfo: req.body,
        token: token,
        remember: req.body.remember
      });
    }

  } catch (e) {
    console.log("::::", e)
    res.json({
      err: {msg:"error unvalid prop" + e,type:'bad'},
      error: e
    }).status(500);
  }
};

module.exports.createNewAccount = createNewAccount;