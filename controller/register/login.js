const hapijoi = require("../../auth/joiLogin");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/users");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const logedin = async (req, res, next) => {

  localStorage.setItem("isRemember", req.body.remember);

  if (req.body.name && req.body.password) {
    try {
      // let data = await hapijoi.loginUser(req.body);
      let data = req.body
      let finduser = await users.selectUserByName(data.name);

      if (finduser[0].length > 0) {
        let checkpassword = await authbcrypt.checkPassword(
          req.body.password,
          finduser[0][0].password
        );

        let chekTokens = await jwt.makeToken({
          hash: finduser[0][0].password,
        });


        if (checkpassword && chekTokens) {
          res.json({
            userInfo: finduser[0][0],
            remember: req.body.remember,
            token: chekTokens,
            number: finduser[0][0].id
          })

          return;
        } else {
          res.json({
            err: "password or user name is incorrect"
          });
        }
      } else {
        res.json({
          err: "no such a user "
        })
      }
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: { msg:"error adding provider" + e,type:'bad'}
      });
    }
  } else {
    res.json({
      err: { msg:"error adding provider" + e,type:'bad'}
    });
  }
};


module.exports.logedin = logedin;