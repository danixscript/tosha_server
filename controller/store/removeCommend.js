const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const products = require("../../models/sql/sqlpools");
const mysql2 = require("../../models/sql/sqlBuy");


const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const removeCommend = async (req, res, next) => {
    try {


        let removeComment = await mysql2.removeComment(req.body.id)
 

        res.json({msg:'comment was removed'})
       


    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.removeCommend = removeCommend;