var express = require('express');
var router = express.Router();

const newAdminOrder = require('../controller/adminpermissions/order/buyProduct')
const getAllOrders = require('../controller/adminpermissions/order/getAllOrders')
const getInfoOrder = require('../controller/adminpermissions/order/getInfoOrder')
const getNotActive = require('../controller/adminpermissions/order/getNotActiveOrders')
const deleteOrder = require('../controller/adminpermissions/acceptorder/deleteOrder')
const acceptOrder = require('../controller/adminpermissions/acceptorder/acceptOrder')
const getStats = require('../controller/adminpermissions/getstats/getStats')
const getOrdersByDate = require('../controller/adminpermissions/getstats/orderfilter/getOrderByDate')
const getExpensiveOrders = require('../controller/adminpermissions/getstats/orderfilter/getExpensiveOrders')
const getCheepestProduct = require('../controller/adminpermissions/getstats/orderfilter/getCheepestProduct')
const getNotActiveOrders = require('../controller/adminpermissions/getstats/orderfilter/getNotAvtiveOrders')
const getTotalPricesFromAllOrders = require('../controller/adminpermissions/getstats/orderfilter/getTotalPricesFromAllOrders')
const checkGet = require('../controller/requestevery5/checkRequest')

const adminGetsAllUsersNotActiveOrders = require('../controller/adminpermissions/order/userorders/getUserNotActiveOrders')



router.get('/', function(req, res, next) {
 
});
 
router.post('/order',newAdminOrder.orderAdmin,  function(req, res, next) {});
router.post('/delorder',deleteOrder.deleteOrder,  function(req, res, next) {});
router.post('/acorder',acceptOrder.acceptOrder,  function(req, res, next) {});

router.get('/getbunchstatistic',getStats.getStatsCon,  function(req, res, next) {});
router.get('/getorderbydate',getOrdersByDate.getOrdersByDate,  function(req, res, next) {});
router.get('/getexpensiveorder',getExpensiveOrders.getExpensiveOrders,  function(req, res, next) {});
router.get('/getcheeporder',getCheepestProduct.getCheepestProduct,  function(req, res, next) {});
router.get('/getnotactive',getNotActiveOrders.getNotActiveOrders,  function(req, res, next) {});
router.get('/order',getAllOrders.getAllOrders,  function(req, res, next) {});
router.get('/test',getInfoOrder.getOrderInfo,  function(req, res, next) {});
router.get('/notactive',getNotActive.getNotActiveOrders,  function(req, res, next) {});

router.get('/getcheck',checkGet.checkRequest,  function(req, res, next) {});

router.get('/orderinfo/:orderid',getAllOrders.getAllOrders,  function(req, res, next) {});
router.get('/totalpricesorders',getTotalPricesFromAllOrders.getTotalPricesFromAllOrders,  function(req, res, next) {});


router.get('/getusersnotactiveorders',adminGetsAllUsersNotActiveOrders.adminGetNotActiveOrdersUSers,  function(req, res, next) {});







module.exports = router;
