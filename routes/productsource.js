var express = require('express');
var router = express.Router();
const getAllProducts = require('../controller/productsource/getAllProductSource')
const permissions = require('../middleware/adminPermissions')
const addProduct = require('../controller/productsource/addProduct')
const removeProduct = require('../controller/productsource/removeProduct')
const getProductByProvider = require('../controller/productsource/getProductsByProvider')

const search = require('../controller/productsource/search')


router.get('/',getAllProducts.getAllProductSource, function(req, res, next) {
 
});
router.get('/search',search.searchProductSource, function(req, res, next) {});

router.post('/addproduct',permissions.permissions,addProduct.addProduct, function(req, res, next) {});
router.post('/removeproduct',permissions.permissions,removeProduct.removeProduct, function(req, res, next) {});
router.post('/updateproduct', function(req, res, next) {});

router.get('/getproviderproducts',getProductByProvider.getProductsByProvider, function(req, res, next) {});





module.exports = router;
