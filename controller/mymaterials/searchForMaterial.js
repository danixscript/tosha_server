const adminMaterialSQL = require("../../models/sql/adminMaterials");


// this is create use rfunction

const searchForMaterial = async (req, res, next) => {
    try {

    let allProducts = await adminMaterialSQL.selectMaterialLike(req.query.text,req.query.text,req.query.text,req.query.text)
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

module.exports.searchForMaterial = searchForMaterial;