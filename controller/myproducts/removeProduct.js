const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const deleteMyProduct = async (req, res, next) => {
    try {

    let removeProduct = await adminproductsSQL.deleteoneProduct(req.body.id)
       
    res.json({msg:'complete'})

    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.deleteMyProduct = deleteMyProduct;