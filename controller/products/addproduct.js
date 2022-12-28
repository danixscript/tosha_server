const adminProducts = require("../../models/sql/products");

const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");
const crypto = require("crypto");


// this is create use rfunction

const addProducts = async (req, res, next) => {
    try {
        console.log(req.body)
        let data = req.body;
        let checkIfProductNameIsUse = await adminProducts.selectProductSourceByNameAndProvider(data.name,data.providersid)
        if(checkIfProductNameIsUse[0].length > 0){
             return res.json({err:'product is alredy here with the same provider'})
        }else{
            let ins = await adminProducts.insertNewProduct(data.name,data.providerid,data.price);

        }
        data.id = checkIfProviderIsUse[0].inserteid

        res.json({data:data,msg:'complete'})
     


    } catch (e) {
        console.log(":::err adding product:", e)
        res.json({
            err: "error adding product" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.addProducts = addProducts;