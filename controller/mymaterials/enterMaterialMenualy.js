const myMaterials = require("../../models/sql/adminMaterials");




// this is logg in function
const addaterialToMyMaterials = async (req, res, next) => {
  try {
 





let enter = await myMaterials.insertNewMaterialToMytable(
req.body.materialname, 
req.body.materialimg,
 0,
    req.body.materialproviderid,

    req.body.materialcoast,  
     req.body.minimum, 
      req.body.quantity, 
      req.body.place,
    req.body.providername,  

 
  
  
    



  )

            


    res.json({
      msg: {
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


module.exports.addaterialToMyMaterials = addaterialToMyMaterials;