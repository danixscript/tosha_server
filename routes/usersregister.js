var express = require('express');
var router = express.Router();
const createNewUser = require('../controller/userscontroller/register/createUser');
const login = require('../controller/userscontroller/register/login')
const forgotPassword = require('../controller/userscontroller/register/forgotPassword')



router.get('/', function(req, res, next) {});

router.post('/login',login.logedin,function(req, res, next) {});

router.post('/loguot', function(req, res, next) { console.log(req.body) });

router.post('/createuser',createNewUser.createNewAccount , function(req, res, next) { console.log("don", req.body)});
router.post('/forgotpass',forgotPassword.forgotPasswordUser, function(req, res, next) {});



module.exports = router;
