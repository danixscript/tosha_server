const providersSQL = require("../../models/sql/adminorders");



// this is create use rfunction

const getAllProvidersOrders = async (req, res, next) => {
    try {
        

        let allProviders = await providersSQL.getAllProvidersOrders(req.query.id)
        res.json({providers:allProviders[0],msg:'complete'})
     


    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.getAllProvidersOrders = getAllProvidersOrders;