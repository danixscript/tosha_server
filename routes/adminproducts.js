var express = require('express');
var router = express.Router();
const getAllProdust = require('../controller/myproducts/getAllMyProducts')
const searchFor = require('../controller/myproducts/searchForProduct')
const setpricehere = require('../controller/myproducts/setPrice')
const setMinPlace = require('../controller/myproducts/setMinPlace')
const removeProduct = require('../controller/myproducts/removeProduct')
const expensiveProducts = require('../controller/myproducts/getAllExpensiveProducts')
const cheepProducts = require('../controller/myproducts/getAllcheepProduct')
const addMenualyProduct = require('../controller/myproducts/addMenualyProduct')
const ActiveProduct = require('../controller/myproducts/ActiveProduct')
const DeActiveProduct = require('../controller/myproducts/DeActiveProduct')
const getFinishedProducts = require('../controller/myproducts/getFinishedProducts')
const setQuantity = require('../controller/myproducts/setquantity')

const getNotActiveProducts = require('../controller/myproducts/getNotActiveProducts')


/* GET home page. */
router.get('/',getAllProdust.getAllMyProductsJ, function(req, res, next) {
  
});

router.get('/search',searchFor.searchForProduct, function(req, res, next) {
  
});

router.post('/setprice',setpricehere.setPrice, function(req, res, next) {
  
});
router.post('/activeproduct',ActiveProduct.activeProduct, function(req, res, next) {
  
});
router.post('/deactiveproduct',DeActiveProduct.DeActiveProduct, function(req, res, next) {
  
});
router.post('/setmin',setMinPlace.setMinMinPlace, function(req, res, next) {
  
});
router.post('/setquantity',setQuantity.setQuantityController, function(req, res, next) {
  
});
router.post('/additem',addMenualyProduct.addProductToMyTable, function(req, res, next) {
  
});

router.post('/deleteproduct',removeProduct.deleteMyProduct, function(req, res, next) {
  
});

router.get('/topexpensive',expensiveProducts.getAllExpensiveProducts, function(req, res, next) {
  
});
router.get('/cheep',cheepProducts.getAllcheepProduct, function(req, res, next) {
  
});

router.get('/finishedproducts',getFinishedProducts.getFinishedProducts, function(req, res, next) {
  
});

router.get('/notactiveproduct',getNotActiveProducts.notActiveProducts, function(req, res, next) {
  
});


module.exports = router;
