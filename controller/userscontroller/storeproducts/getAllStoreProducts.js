const usersStoreProducts = require("../../../models/userssql/storeProducts");



// this is create use rfunction

const getAllMyProductsToUser = async (req, res, next) => {
    try {
        

        let allProducts = await usersStoreProducts.getAllMyProductsE()   
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

module.exports.getAllMyProductsToUser = getAllMyProductsToUser;