var express = require('express');
var router = express.Router();

const getAllProductsStore = require('../controller/userscontroller/storeproducts/getAllStoreProducts')




router.get('/', function(req, res, next) {
 
});


router.get('/products',getAllProductsStore.getAllMyProductsToUser, function(req, res, next) {
 
});




module.exports = router;
