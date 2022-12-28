
const orders = require("../../models/sql/sqlpools");
const neworder = require("../../models/sql/sqlBuy");
// this is create use rfunction

const newOrder = async (req, res, next) => {
    try {
   
       let ispaid = 'no';
       let dateoo = '00.00.00'
       let yourDate = new Date()
     
        yourDate.toISOString().split('T')[0]

       
      

        let inseretNewOrder = await neworder.insertNewOrders(
            req.body.user.user.id,
            req.body.shipping.address,
            req.body.endPrice,
            ispaid,
            dateoo,
            "no",
            dateoo,
            yourDate, 
            req.body.shipping.address2,
            req.body.user.user.email,
            req.body.user.user.name,
            req.body.shipping.state,
            req.body.shipping.country,
            req.body.shipping.phon,
            req.body.shipping.zipcode
 
          );


let array_p = []


          for(let i =0; i < req.body.item.length; i++){
            let tota4l =  (req.body.item[i].price * req.body.item[i].amount);
              array_p.push([
                inseretNewOrder[0].insertId,
                req.body.user.user.name,
                req.body.item[i].amount,
                req.body.item[i].id,
                req.body.item[i].price,  
                req.body.item[i].name,
                req.body.item[i].img,
                req.body.item[i].description,
                req.body.item[i].cat,
                tota4l]
              )
          }

// let at = [array_p]
// let ct = []
// let gog = []

// ct.push(at);
// gog.push(ct)

const mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12344",
  database: "storeapp",
  waitForConnections: true, 
  connectionLimit: 10,
  queueLimit: 0,
});

var sql = 'INSERT INTO storeapp.orderproducts(orderid, name, amount, productid, productprice, productname, productimage, productdesc, productcat, oneprodtotalprice) VALUES ? '

 pool.query(sql, [array_p], function(err) {
  if (err) throw err;
  pool.end();
});

          // await neworder.insertNewProductOrders2(ct);

    
res.json({id:inseretNewOrder[0].insertId})


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