const adminMaterialsSQL = require("../../models/sql/adminMaterials");



// this is create use rfunction

const getAllExpensiveMateial = async (req, res, next) => {
    try {
        

        let expensiveProducts = await adminMaterialsSQL.getExpensiveMaterial()
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

module.exports.getAllExpensiveMateial = getAllExpensiveMateial;