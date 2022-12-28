const DohSQL = require("../../models/sql/adminorders");
const excelJS = require("exceljs");
var nodemailer = require('nodemailer');


// this is create use rfunction  

const ProvidersDohExel = async (req, res, next) => {
    
    try {
  let numint = parseInt(req.query.id)

        let allProviders = await DohSQL.selectAllOrdersByProvider(numint)
  
if(allProviders[0].length > 0){


      const workbook = new excelJS.Workbook();  // Create a new workbook
  const worksheet = workbook.addWorksheet(`הזמנות מספק  ${allProviders[0][0].providername}` );
  const path = "../dashboard/public/upload";


        worksheet.columns = [
            { header: "מספר הזמנה", key: "adminorderid", width: 10 }, 
            { header: "תאריך ", key: "date", width: 10 },
            { header: "שם ספק", key: "providername", width: 10 },
            { header: "עובד שהזמין ", key: "employeename", width: 10 },
            { header: "מחיר", key: "totalprice", width: 10 },
        ];


        let counter = 1;
        allProviders[0].forEach((order) => {
          order.s_no = counter;
          worksheet.addRow(order); // Add data in worksheet
          counter++;
        });
        worksheet.getRow(1).eachCell((cell) => {
            cell.font = { bold: true };
          });

          const data = await workbook.xlsx.writeFile(`${path}/providers.xlsx`)



          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'toshabakery54@gmail.com',
              pass: 'ocbgpkvyicvrkdgj'
            }
          });

          const buffer = await workbook.xlsx.writeBuffer();
          var mailOptions = {
            from: 'toshabakery54@gmail.com',
            to: 'toshabakery54@gmail.com',
            subject: '    דוח ספקים מלא',
            attachments: [
                {
                    filename:'providers.xlsx',
                    content: buffer,
                    contentType:
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                },
            ],
            text: "היי קיבלת דוח מספק"
          };


          
          transporter.sendMail(mailOptions, async function(error, info){
            if (error) {
           return   res.json({msg:{type:'bad',msg:"email is not good" + error.message}})
            } else {
    
      return  res.json({err:{type:"good",msg:'yoe have a new email check this out'}})
            }
          })



        //   .then(() => {
        //   return  res.json({
        //       status: "success",
        //       message: "file successfully downloaded",
        //       path: `${path}/dohproviders.xlsx`,
        //      });
        //   });

        // res.json({msg:{msg:'הדוח שלך מחכה בתיקיית',type:'good'}})
  


}else{
  return res.json({err:{msg:'אין הזמנות מספק זה', type:'bad'}})
}

    } catch (e) {
        console.log(":::err getting provider:", e)
        res.json({
            err: { msg:"error adding provider" + e,type:'bad'},
            e,
            error: e
        }).status(500);
    }
};

module.exports.ProvidersDohExel = ProvidersDohExel;