const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const notActiveProducts = async (req, res, next) => {
    try {
        

        let cheepProducts = await adminproductsSQL.notActiveProducts()
        res.json({allProducts:cheepProducts[0],msg:'complete'})
     


    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.notActiveProducts = notActiveProducts;