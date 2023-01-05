var express = require('express');
var router = express.Router();
const loginEmployee = require('../controller/registeradmin/login');
const registerEmployee = require('../controller/registeradmin/registeremployee');
const users = require('../controller/adminpermissions/getAllUsers');
const adminMiddleware = require('../middleware/adminPermissions')
const workers = require('../controller/adminpermissions/getallworkers')
const removeAdmin = require('../controller/registeradmin/removeemployee');
const allAdminOrders = require('../controller/userscontroller/getstats/getStatsOfStore');

const bandUser = require('../controller/adminpermissions/users/bandUser');
const unbandUser = require('../controller/adminpermissions/users/unbandUser');
const firsUserAdmin = require('../controller/adminpermissions/firsUserAdmin');
const dogHanoot = require('../controller/adminpermissions/acceptorder/dogHanoot');
const updateEmployeePhone = require('../controller/adminpermissions/updateEmployeePhone');
const updateEmployeepermissions = require('../controller/adminpermissions/updateEmployeepermissions');


const login = require('../controller/register/login')



router.get('/', function(req, res, next) {
 
});
 
router.post('/login',loginEmployee.employeeLogIn,  function(req, res, next) {});
router.post('/logout',  function(req, res, next) { console.log(req.body) });
router.post('/register',registerEmployee.createNewAccount , function(req, res, next) { console.log("don", req.body)});
router.post('/removeemployee',adminMiddleware.permissions,removeAdmin.removeEmployee , function(req, res, next) { console.log("don", req.body)});
router.post('/banduser',adminMiddleware.permissions,bandUser.bandUserController , function(req, res, next) { console.log("don", req.body)});
router.post('/unband',adminMiddleware.permissions,unbandUser.unbandUserController , function(req, res, next) { console.log("don", req.body)});



router.post('/updatephone',adminMiddleware.permissions,updateEmployeePhone.updateEmployeePhone , function(req, res, next) { });
router.post('/updateper',adminMiddleware.permissions,updateEmployeepermissions.updateEmployeepermissions , function(req, res, next) { });




router.post('/getallemployees',adminMiddleware.permissions,workers.getAllEmployees, function(req, res, next) {
  
});

router.get('/checkforfirstUser',firsUserAdmin.firsUserAdmin, function(req, res, next) {
  
});

router.get('/getallusers',users.getAllUsers, function(req, res, next) {
  
});

router.get('/getallstats',allAdminOrders.getStatsOfStore, function(req, res, next) {
  
});

router.get('/getdohh',dogHanoot.dogHanoot, function(req, res, next) {
  
});


module.exports = router;
