const authbcrypt = require("../../../auth/bcrypt");
const users = require("../../../models/userssql/usersRegister");
const jwt = require("../../../auth/jwt");
const localStorage = require("localStorage");
var nodemailer = require('nodemailer');

// this is create use rfunction

const forgotPasswordUser = async (req, res, next) => {
  try {


    let checkUserEmail = await users.selectUserByEmail(req.body.useremail);

    if (checkUserEmail[0].length <= 0) {
      return res.json({
        err: {type:'bad',msg:"אין משתמש עם אימייל זהה"}
      });
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'toshabakery54@gmail.com',
          pass: 'ocbgpkvyicvrkdgj'
        }
      });

   
      const alphabet = "abcdefghijklmnopqrstuvwxyz"
      let newPassword = ''
      for(let i = 0; i < 3; i++){
        let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

        newPassword += newPassword + randomCharacter
      }

      let hash = await authbcrypt.hashPassport(newPassword);


      let updateuserPassword = await users.updateUserPassword(hash,req.body.useremail);


      let msages = '----היי ראינו שאתה רוצה לאפס סיסמה הינה הסיסמה החדשה שלך גש לאתר ועדכן לסיסמה יותר נוחה יום טוב    ----  ' + newPassword


 if(updateuserPassword[0].affectedRows > 0){
    
    var mailOptions = {
        from: 'toshabakery54@gmail.com',
        to: req.body.useremail,
        subject: ' איפוס סיסמה ממאפיית טושה',
        text: msages
      };
      
      transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
          res.json({msg:{type:'bad',msg:"email is not good" + error.message}})
        } else {

res.json({err:{type:"good",msg:'yoe have a new email check this out'}})
        }
      })

 }


   




 



  

  } catch (e) {
    console.log("::::", e)
    res.json({
      err: {msg:"error unvalid prop" + e,type:'bad'},
      error: e
    }).status(500);
  }
};

module.exports.forgotPasswordUser = forgotPasswordUser;