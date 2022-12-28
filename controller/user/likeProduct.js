const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const products = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


const likeProduct = async (req, res, next) => {
    try {
        console.log(req.body)
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]


        let product = await products.getProductById(req.body.id);
        console.log(product[0][0].likes)
        let jsonProduct = JSON.parse(product[0][0].likes);

        
        for(let i =0; i < jsonProduct.length; i++){

            if(jsonProduct[i].userid == req.body.user.id){

                jsonProduct[i].rating = req.body.rating;
                let string2 = JSON.stringify(jsonProduct)

                products.updateLikes(string2,req.body.id)

                console.log('already give review')

                res.json({err:'you change your idea',review:string2});
                return
            }

        }

let obj = {
    name:req.body.user.name,
    userid:req.body.user.id,
    rating:req.body.rating,

}
jsonProduct = [...jsonProduct,obj];


let string = JSON.stringify(jsonProduct)
product[0][0].likes = string
products.updateLikes(string,req.body.id)

res.json({product:product[0][0],review:string})



    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.likeProduct = likeProduct;