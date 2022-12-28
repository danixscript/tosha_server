const adminorder = require("../../../models/sql/adminTable");
const myProduct = require("../../../models/sql/adminproducts");

const myMaterials = require("../../../models/sql/adminMaterials");



// this is logg in function
const acceptOrder = async (req, res, next) => {
  try {
    let getOrderProduct = await adminorder.getAllProductFromOrder(req.body.orderid);

    if (getOrderProduct[0].length > 0) {


      for (let i = 0; i < getOrderProduct[0].length; i++) {

        if (getOrderProduct[0][i].type == 'material') {
          let ifMaterialExist = await myMaterials.checkIfMaterialExist(getOrderProduct[0][i].productid, getOrderProduct[0][i].productname)

          if (ifMaterialExist[0].length > 0) {
            let amountQ = ifMaterialExist[0][0].quantity + getOrderProduct[0][0].quantity
            let updateCh = await myMaterials.updateQuantityMaterialTable(amountQ, ifMaterialExist[0][0].materialid)


          } else {
            await myMaterials.insertNewMaterialToMytable(


              getOrderProduct[0][i].productname,
              getOrderProduct[0][i].productimg,
              getOrderProduct[0][i].productid,
              getOrderProduct[0][i].providerid,
              getOrderProduct[0][i].price,
             300,
             getOrderProduct[0][i].quantity,
              'לא עודכן',
              getOrderProduct[0][i].providername,
              



            )
          }


        } else if (getOrderProduct[0][i].type == 'product') {
          let ifProductInTable = await myProduct.checkIfProductExist(getOrderProduct[0][i].productid, getOrderProduct[0][i].productname);



          if (ifProductInTable[0].length > 0) {
            let amountQ = ifProductInTable[0][0].quantity + getOrderProduct[0][0].quantity
            let updateCh = await myProduct.updateQuantityMyTable(amountQ, ifProductInTable[0][0].id)


          } else {
            await myProduct.insertNewProductToMytable(


              getOrderProduct[0][i].productid,
              getOrderProduct[0][i].productname,
              getOrderProduct[0][i].providerid,
              0,
              300,
              getOrderProduct[0][i].quantity,
              'לא עודכן',
              false,
              getOrderProduct[0][i].productimg,
              getOrderProduct[0][i].name,

              'לא מעודכן'


            )
          }
        }


      }

      let activeMyOrder = await adminorder.updateOrder(req.body.orderid)





    }



    res.json({
      data: {
        type: 'good',
        msg: 'delete complete'
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


module.exports.acceptOrder = acceptOrder;