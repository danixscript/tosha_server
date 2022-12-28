const providerSQL = require("../../models/sql/providers");
const jwt = require("../../auth/jwt");
const productSQL = require("../../models/sql/productSource");

const localStorage = require("localStorage");
const crypto = require("crypto");


// פה אני מסיר ספק ולכן מסיר את כל המוצרים שהוא מוחר

const removeProvidernow = async (req, res, next) => {
    try {
        const date = await new Date();
        console.log(req.body)
        let data = req.body;
        let removeProviderNow = await providerSQL.removeProviderById(data.id);
        let removeProductSourceNow = await productSQL.deleteAllProductByProvider(data.id);


        res.json({data:data,msg:'complete',type:'good'})
     


    } catch (e) {
        console.log(":::err adding provider:", e)
        res.json({
            err:{ msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.removeProvidernow = removeProvidernow;