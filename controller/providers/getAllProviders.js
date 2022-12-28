const providersSQL = require("../../models/sql/providers");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");
const crypto = require("crypto");


// this is create use rfunction

const getAllProviders = async (req, res, next) => {
    try {
        

        let allProviders = await providersSQL.selectAllProvider()
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

module.exports.getAllProviders = getAllProviders;