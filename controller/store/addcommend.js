const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const mysql2 = require("../../models/sql/sqlBuy");

const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");
const crypto = require("crypto");


// this is create use rfunction

const addcommend = async (req, res, next) => {
    try {
        const date = await new Date();
        console.log(req.body)
        // let getProduct = await products.getProductById(req.body.itemId);
        // console.log(getProduct[0][0]);
        // let json = JSON.parse(getProduct[0][0].commends);
        // const id = crypto.randomBytes(16).toString("hex");

     
    
        let commentid = await mysql2.insertNewComment(req.body.name,req.body.itemId,req.body.rating,req.body.text,date,req.body.id)

        // json = [...json, obj]
        // console.log(json);
        // let updateCommend = await products.updateCommend(json,req.body.itemId)
        // let returnMyProduct = await products.getProductById(req.body.itemId);

        // console.log(updateCommend,returnMyProduct[0][0])
        let allcomments = await mysql2.getCommentById(req.body.itemId)
       
        res.json({allcommends:allcomments,msg:'comment was editing'})
     


    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.addcommend = addcommend;