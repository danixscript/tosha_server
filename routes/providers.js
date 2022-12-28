var express = require('express');
var router = express.Router();
const addProvider = require('../controller/providers/add');
const removeProvider = require('../controller/providers/remove');
const permissions = require('../middleware/adminPermissions')
const getAllProvider = require('../controller/providers/getAllProviders');
const editProvider = require('../controller/providers/editProvider');
const DohProvider = require('../controller/providers/DohProvider');



router.get('/',getAllProvider.getAllProviders, function(req, res, next) {});
router.get('/doh',DohProvider.ProvidersDohExel, function(req, res, next) {});

router.post('/addprovider',permissions.permissions,addProvider.addProvider,  function(req, res, next) {});
router.post('/removeprovider',permissions.permissions,removeProvider.removeProvidernow,  function(req, res, next) { });
router.post('/addproviderproduct',permissions.permissions, function(req, res, next) { });

router.post('/editprovider',editProvider.editProviderController, function(req, res, next) { });







module.exports = router;
