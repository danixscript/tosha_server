const adminMaterialsSQL = require("../../models/sql/adminMaterials");



// this is create use rfunction

const getMaterialsAlmostFinished = async (req, res, next) => {
    try {
        

        let allMaterials = await adminMaterialsSQL.almostDone()
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

module.exports.getMaterialsAlmostFinished = getMaterialsAlmostFinished;

const getMaterialThatFinished = async (req, res, next) => {
    try {
        

        let allMaterials = await adminMaterialsSQL.underMinimum()
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

module.exports.getMaterialThatFinished = getMaterialThatFinished;