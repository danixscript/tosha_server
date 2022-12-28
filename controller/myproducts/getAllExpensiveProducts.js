const adminproductsSQL = require("../../models/sql/adminproducts");



// this is create use rfunction

const getAllExpensiveProducts = async (req, res, next) => {
    try {
        

        let expensiveProducts = await adminproductsSQL.getExpensiveProducts()
        res.json({allProducts:expensiveProducts[0],msg:'complete'})
     


    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.getAllExpensiveProducts = getAllExpensiveProducts;