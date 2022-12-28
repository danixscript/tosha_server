var express = require('express');
var router = express.Router();
const newOrder = require("../controller/userscontroller/order/NewOrder");
const getMyOrders = require('../controller/user/getMyOrders');
const gelAllMyOrdersByClientId = require("../controller/userscontroller/order/getAllOrdersById");
const getAllNotActiveOrdersFromUser = require("../controller/userscontroller/order/getAllNotActiveOrdersFromUser");
const updateUserInfo = require("../controller/userscontroller/register/updateuserInfo");
const getOrderInfo = require("../controller/userscontroller/order/getOrderInfo");
const getOrderByOrderId = require("../controller/userscontroller/order/getOrderByOrderId");

const payfororder = require("../controller/userscontroller/order/userPayfor");
const userSeeTheOrderCo = require("../controller/userscontroller/order/userSeeTheOrderCont");




/* GET users listing. */

router.get('/getorderbyid',gelAllMyOrdersByClientId.getMyOrdersById, function(req, res, next) {
});
router.get('/getorderbyorderid',getOrderByOrderId.getorderByOrderIdFF, function(req, res, next) {
});
router.get('/usernotactiveorder',getAllNotActiveOrdersFromUser.userGetsAllHesNotActiveOrder, function(req, res, next) { 
});


router.get('/getorderinfo',getOrderInfo.getOrderInfo, function(req, res, next) { 
});

router.post('/updateuserinfo',updateUserInfo.updateuserInfo, function(req, res, next) {
  
});

router.post('/neworder',newOrder.newOrder, function(req, res, next) {
  
});
router.post('/paynow',newOrder.newOrder, function(req, res, next) {
  
});
router.post('/userspay',payfororder.userPayForOrder, function(req, res, next) {
  
});

router.post('/userseetheorder',userSeeTheOrderCo.userSeeTheOrderCont, function(req, res, next) {
  
});




// admin side 

// router.get('/getallorders',getMyOrders.getMyOrders, function(req, res, next) {


// });






module.exports = router;
