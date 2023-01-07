const neworder = require("../../../models/userssql/orders");
const adminTable = require("../../../models/sql/adminproducts");
const mysql = require('../../../models/sql/mysql2')

// this is create use rfunction

const newOrder = async (req, res, next) => {
  try {
    var d = new Date,
      dformat = [d.getMonth() + 1,  
        d.getDate(),
        d.getFullYear()
      ].join('-') + ' ' + [d.getHours(),
        d.getMinutes(),
        d.getSeconds()
      ].join(':');

      let totalOrderPriceInServer =0;


      for (let i = 0; i < req.body.item.cardItems.length; i++) {
        totalOrderPriceInServer+= (req.body.item.cardItems[i].price * req.body.item.cardItems[i].amount)


      }




      


    //    הייייייייייייייייייייייייי חשובבבבבבבבבב מאודדדדדדדדדדדדדדדדדדדדדדד צריך להוריד מלאי 

    let inseretNewOrder
    let array_p = []
    let flagthatmade = true


    for (let i = 0; i < req.body.item.cardItems.length; i++) {
      let theprod = await adminTable.CheckAmount(req.body.item.cardItems[i].id);

      if (theprod[0][0].quantity <= 0  ) {
      return  res.json({
          err: {
            type: 'bad',
            msg: 'מוצר זה אינו במלאי' + req.body.item.cardItems[i].itemname
          }
        })
      }else if(theprod[0][0].quantity < req.body.item.cardItems[i].amount){
       return res.json({
          err: {
            type: 'bad',
            msg: '   אין מספיק ממוצר זה כמו שביקשת' + req.body.item.cardItems[i].itemname
          }
        })
      }
      
      else{
        if(flagthatmade){
          inseretNewOrder = await neworder.insertNewOrdersUsersss(
            req.body.user.user.id,
            totalOrderPriceInServer,
            dformat,
            req.body.user.user.email,
            req.body.active,
            req.body.ordertype,
            req.body.peopleCount,
            0,
            req.body.text,
          );
        }
        flagthatmade = false
      let amountnow =  theprod[0][0].quantity - req.body.item.cardItems[i].amount;
       let a = await adminTable.updateQuantityMyTable(amountnow,theprod[0][0].id)

        if(a[0].affectedRows > 0){
          array_p.push([
            inseretNewOrder[0].insertId,
            req.body.item.cardItems[i].id,
             req.body.item.cardItems[i].amount,
            req.body.item.cardItems[i].price,
              req.body.item.cardItems[i].productimg,
               req.body.item.cardItems[i].itemname,
            req.body.item.cardItems[i].producttype,
          ])
        } } }
        // const mysql = require("mysql2");
        // let pool = mysql.createPool({
        //   host: "localhost",
        //   user: "root",
        //   password: "12344",
        //   database: "toshproject",
        //   waitForConnections: true,
        //   connectionLimit: 10, 
        //   queueLimit: 0,
        // });

   

    var sql = 'INSERT INTO toshproject.usersorderinfo(userorderid, userproductid, userproductquantity, userproductprice, userproductimg, userproductname, userproducttype) VALUES ? '

    mysql.query(sql, [array_p], function (err) {
      if (err) throw err;
      pool.end();
    });

    // await neworder.insertNewProductOrders2(ct);


    res.json({
      id: inseretNewOrder[0].insertId
    })


  } catch (e) {
    console.log("::::", e)
    res.json({
      err: "error unvalid prop" + e,
      e,
      error: e
    }).status(500);
  }
};

module.exports.newOrder = newOrder;