
const mysql2 = require("../../models/sql/sqlBuy");



// this is create use rfunction

const getProductComments = async (req, res, next) => {
    try {
    
        let comments = await mysql2.getCommentById(req.body.id);
        let obj = {
            comments:comments[0],
            products:req.products
        }

     
        res.json({data:obj})
       

    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.getProductComments = getProductComments;