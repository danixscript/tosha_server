const myProduct = require("../../models/sql/adminproducts");




// this is logg in function
const addProductToMyTable = async (req, res, next) => {
  try {
    let getOrderProduct = await myProduct.getProductFromMyProductWhereNameAndType(req.body.itemname,req.body.producttype);

if(getOrderProduct[0].length > 0){
    return res.json({err:{type:'bad',msg:"you alredy have this item"}})
}


            await myProduct.insertNewProductToMytable(

             0,
              req.body.itemname,
              0,
              req.body.price,
              req.body.minimum,
              req.body.quantity,
              req.body.place,
              false,
              req.body.productimg,
              "my self",
              req.body.producttype,

            )
          
   

   



    



    res.json({
      data: {
        type: 'good',
        msg: 'enter product succeset complete'
      },
    })



    return;


  } catch (e) {
    console.log("i am the master ", e.message);
    // req.session.err = e.details.map((item) => item.message);
    return res.json({
      err: {
        type: "bad",
        msg: e.message
      }
    });
  }
}


module.exports.addProductToMyTable = addProductToMyTable;