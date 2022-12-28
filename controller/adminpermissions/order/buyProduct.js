const adminorder = require("../../../models/sql/adminorders");
const mysql = require("../../../models/sql/mysql2");

var nodemailer = require('nodemailer');


// this is logg in function
const orderAdmin = async (req, res, next) => {
    try {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'toshabakery54@gmail.com',
          pass: 'ocbgpkvyicvrkdgj'
        }
      });
      let msggg = []

      for(let i =0; i < req.body.products.length; i++){
        let objj = {}

        objj.name = req.body.products[i].productname
        objj.amount = req.body.products[i].amount
        msggg.push(objj)



      }

      
      
      var mailOptions = {
        from: 'toshabakery54@gmail.com',
        to: req.body.products[0].email,
        subject: 'הזמנה חדשה ממאפיית טושה',
        text: JSON.stringify(msggg)
      };
      
      transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
          res.json({err:{type:'bad',msg:"email is not good" + error.message}})
        } else {

          let date = new Date()
     
          date.toISOString().split('T')[0]
  
          var d = new Date,
      dformat = [d.getMonth()+1,
                 d.getDate(),
                 d.getFullYear()].join('-')+' '+
                [d.getHours(),
                 d.getMinutes(),
                 d.getSeconds()].join(':');
  
          let adminsOrder = await adminorder.insertNewOrders(req.body.total,dformat,req.body.admin.id,false,req.body.admin.name,req.body.providerid,req.body.providername);
          let productArrayInfo = []
            for(let i =0; i < req.body.products.length; i++){
              let totalMatch =  (req.body.products[i].price * req.body.products[i].amount);
              productArrayInfo.push([
                  adminsOrder[0].insertId,
                  req.body.products[i].productid,
                  req.body.products[i].amount,
                  req.body.products[i].price,
                  req.body.products[i].providersid,
                  req.body.products[i].productimg, 
                  req.body.products[i].productname,  
                  req.body.products[i].type
   
    
               ]
                )
            } 
        
        
        
          if(adminsOrder[0].affectedRows > 0){
              var sql = 'INSERT INTO toshproject.adminorderinfo(orderid, productid, quantity, price, providerid,productimg,productname,type) VALUES ? '
            await  mysql.query(sql, [productArrayInfo], function(err) {
               if (err) throw err;
               pool.end();
             });
          }
  
  
  
  
  
  
          
  
  
            res.json({
              employees: adminsOrder[0],
              msg:{type:'good',msg:'הזמנה חדשה בוצעה'}
            })
  
            return;
          
        }
      });

       
         
     
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: {msg:e.message,type:"bad"}
      });
    }
  } 


module.exports.orderAdmin = orderAdmin;