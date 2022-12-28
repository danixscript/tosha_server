var express = require('express');
var router = express.Router();
const addItem = require("../controller/store/addItem");
const getAllMyItems = require('../controller/store/getAllMyProducts');
const deleteItem = require('../controller/store/delItem');
const getAllProducts = require("../controller/store/getAllProducts");
const update = require('../controller/store/updateProduct');
const addcommend = require('../controller/store/addcommend');
const remove = require('../controller/store/removeCommend');
const getproductbyid = require('../controller/store/getProductById');
const getProductComments = require('../controller/store/getProductcomments')
const jwtPass = require('../middleware/token')

const multer = require('multer');
const path = require("path");


const fs = require('fs')

const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    
    cb(null, path.join(__dirname ,"../", "/public/upload/")  );
  },
  filename: function(req,file,cb) {
    
   cb(null,"mario_" + Math.floor(Date.now() / 1000) + file.originalname)
  }
});

const filterFile = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'|| file.mimetype === 'image/png'){
    cb(null, true)
  }else{
    cb(null, false)
  }
};


const upload = multer({
  storage: storage,
  limits:{
    fieldSize: 1024 * 1024 * 5
  },
  fileFilter:filterFile
 
});





/* GET users listing. */
router.get('/items/get',getAllMyItems.getAllMyProducts, function(req, res, next) {
  
});

router.get('/items/getall',getAllProducts.getAllProducts, function(req, res, next) {
   res.json({msg:'respond with a resource'});
 });





router.post('/items/add',upload.single('file'),jwtPass.tryGetIn,addItem.addNewItem, function(req, res, next) {
     res.json({msg:'respond with a resource'});

  });
  router.post('/items/del',jwtPass.tryGetIn,deleteItem.delItem, function(req, res, next) {
   fs.unlink(req.body.path, (err) => {
      if (err) {
        console.error("err")
        res.json({err:"321err"})
        return
      }
    res.json({msg:'delete complete',data:req.body.number})
      //file removed
    })

  });



  router.post("/deletwork", function (req, res, next) {
  

 
   
   
 });
 
 router.get('/file/:fileName', function (req, res) {
   const filePath = path.join(__dirname ,"../","/public/upload", req.params.fileName)
   res.sendFile(filePath);
 });


 router.post('/items/updateimg', function(req, res, next) {
  console.log(req.body)

});



  router.post('/items/update',upload.single('file'),update.updateProducts, function(req, res, next) {
    
   if(req.body.admin){
    req.body = JSON.parse(req.body.admin)
   }
   console.log(req.body.path1);
if(req.file){
  fs.unlink(req.body.path1, (err) => {
    if (err) {
      console.error("err")
      res.json({err:"321err"})
      return
    }
   res.json({msg:'delete complete',data:req.items})
  
    //file removed
  })
}else{
  res.json({msg:'delete complete',data:req.items});
}


  });

  router.post('/addcommend',addcommend.addcommend, function(req, res, next) {
    console.log(req.body)
 
 });

 router.post('/removecommend',remove.removeCommend, function(req, res, next) {
  console.log(req.body)

});

router.post('/getproductbyid',getproductbyid.getProductById,getProductComments.getProductComments , function(req, res, next) {
  console.log(req.body)

});

module.exports = router;
