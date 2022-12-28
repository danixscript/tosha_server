const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const searchForProduct = async (req, res, next) => {
    try {

    let allProducts = await adminproductsSQL.selectProductLike(req.query.text,req.query.text,req.query.text,req.query.text)
        res.json({allProducts:allProducts[0],msg:'complete'})

    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.searchForProduct = searchForProduct;