const adminProducts = require("../../models/sql/adminproducts");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");
const crypto = require("crypto");

const providerInsert = require("../../models/sql/providers");

// this is create use rfunction

const addProvider = async (req, res, next) => {
    try {
        const date = await new Date();

        console.log(req.body)
        let data = req.body;
        let ins ;
    
        let checkIfProviderIsUse = await adminProducts.selectProviderByName(data.name)

        if(checkIfProviderIsUse[0].length > 0){
            return res.json({err:{msg:'provider is in use',type:'bad'}})

        }else{
             ins = await providerInsert.insertProvider(data.name,data.agentname,data.address,data.phone,data.email,data.zipcode,data.cat,data.day);

        }
        data.id = ins[0].inserteid

        res.json({data:data,msg:'complete'})
     


    } catch (e) {
        console.log(":::err adding provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.addProvider = addProvider;