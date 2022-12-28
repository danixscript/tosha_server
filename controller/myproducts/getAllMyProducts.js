const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const getAllMyProductsJ = async (req, res, next) => {
    try {
        

        let allProducts = await adminproductsSQL.getAllMyProductsE()
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

module.exports.getAllMyProductsJ = getAllMyProductsJ;