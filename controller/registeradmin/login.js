const authBcrypt = require("../../auth/bcrypt");
const admin = require("../../models/sql/admin");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const employeeLogIn = async (req, res, next) => {
  localStorage.setItem("isRemember", req.body.remember);
  if (req.body.name && req.body.password) {
    try {
      let data = req.body
      let findUser = await admin.selectEmployeeByName(data.name);
      if (findUser[0].length > 0) {
        let checkPassword = await authBcrypt.checkPassword(
          req.body.password,
          findUser[0][0].password
        );

        let checkTokens = await jwt.makeToken({
          hash: findUser[0][0].password,
        });


        if (checkPassword && checkTokens) {
          res.json({
            adminInfo: findUser[0][0],
            remember: req.body.remember,
            token: checkTokens,
            id: findUser[0][0].id
          })

          return;
        } else {
          res.json({
            err: "password or user name is incorrect"
          });
        }
      } else {
       
        res.json({
          err: "username  is incorrect"
        })
      }
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: e.message
      });
    }
  } else {
    res.json({
      err: "the value in this texts box is requier!"
    });
  }
};


module.exports.employeeLogIn = employeeLogIn;