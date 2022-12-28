
const users = require("../../models/sql/sqlpools");




const getAllUsers = async (req, res, next) => {
try {
  

 

  let getAllUsers = await users.selectUser();

  if(getAllUsers){
    
    res.json({data:getAllUsers[0]});
  }
  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getAllUsers = getAllUsers;
