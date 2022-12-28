const adminMaterialsSQL = require("../../models/sql/adminMaterials");



// this is create use rfunction

const getAllMyMaterialsJ = async (req, res, next) => {
    try {
        

        let allMaterials = await adminMaterialsSQL.getAllMyMaterials()
        res.json({allMaterials:allMaterials[0],msg:'complete'})
     


    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.getAllMyMaterialsJ = getAllMyMaterialsJ;