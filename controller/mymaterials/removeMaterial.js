const adminMaterialsSQL = require("../../models/sql/adminMaterials");



// this is create use rfunction

const deleteMyMaterial = async (req, res, next) => {
    try {

    let removeProduct = await adminMaterialsSQL.deleteoneMaterial(req.body.id)
       
    res.json({msg:'complete'})

    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.deleteMyMaterial = deleteMyMaterial;