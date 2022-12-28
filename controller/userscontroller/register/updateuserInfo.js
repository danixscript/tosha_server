const authbcrypt = require("../../../auth/bcrypt");
const users = require("../../../models/userssql/usersRegister");
const jwt = require("../../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const updateuserInfo = async (req, res, next) => {

    localStorage.setItem("isRemember", req.body.remember);

    if (req.body.name && req.body.oldpassword && req.body.newPassword) {
        try {
            let data = req.body
            let finduser = await users.getUserById(data.id);

            if (finduser[0].length > 0) {
                let checkpassword = await authbcrypt.checkPassword(
                    req.body.oldpassword,
                    finduser[0][0].password
                );

                let hash = await authbcrypt.hashPassport(req.body.newPassword);


                if (checkpassword) {
                    let updateuser = await users.updateUser(hash, req.body.name, req.body.email, req.body.phone, req.body.address, finduser[0][0].id)
                  
                    if (updateuser[0].affectedRows > 0) {
                        req.body.oldpassword = ''
                        req.body.newPassword = ''
                        res.json({
                            userInfo: req.body,
                            remember: req.body.remember,
                            number: finduser[0][0].id
                        })

                        return;
                    } else {
                        res.json({
                            err: {
                                msg: "סיסמה לא נכונה",
                                type: 'bad'
                            }
                        });
                    }

                } else {
                    res.json({
                        err: {
                            msg: 'סיסמה ישנה לא נכונה',
                            type: 'bad'
                        }
                    })
                }




            } else {
                res.json({
                    err: {
                        msg: "  משתמש לא קיים",
                        type: 'bad'
                    }
                })
            }
        } catch (e) {
            console.log("i am the master ", e.message);
            // req.session.err = e.details.map((item) => item.message);
            res.json({
                err: {
                    msg: "error adding provider" + e,
                    type: 'bad'
                }
            });
        }
    } else {
        res.json({
            err: {
                msg: "יש בעיה בעדכון פרטי משתמש בדוק שהכל תקין  " ,
                type: 'bad'
            }
        });
    }
};


module.exports.updateuserInfo = updateuserInfo;