var express = require('express');
var router = express.Router();
const acceptUserOrder = require("../controller/userscontroller/order/acceptUserOrderByAdmin");
const desableOrderUser = require("../controller/userscontroller/order/desableOrder");




/* GET users listing. */


router.post('/acceptorder',acceptUserOrder.acceptOrder, function(req, res, next) { 
});

router.post('/desableuserorder',desableOrderUser.desableOrderController, function(req, res, next) { 
});






module.exports = router;
