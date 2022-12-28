var express = require('express');
var router = express.Router();



const topProductFromProvider = require('../controller/adminpermissions/getstats/orderfilter/topProductFromProvider')
const mostOrderedProduct = require('../controller/adminpermissions/getstats/orderfilter/mostOrderedProduct')
const usersAllOrders = require('../controller/adminpermissions/order/userorders/getAllUsersOrders')
const getAllUsers = require('../controller/adminpermissions/getAllUsers')




router.get('/', function(req, res, next) {
 
});


router.get('/topproduct',topProductFromProvider.getTopProductFromProvider,  function(req, res, next) {});
router.get('/toporderedproduct',mostOrderedProduct.mostOrderdProductAdminOrder,  function(req, res, next) {});

router.get('/getallusersorders',usersAllOrders.adminGetAllUsersOrders,  function(req, res, next) {});

router.get('/getallusers',getAllUsers.getAllUsers,  function(req, res, next) {});


module.exports = router;
