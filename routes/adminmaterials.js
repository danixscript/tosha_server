var express = require('express');
var router = express.Router();
const getAllMaterials = require('../controller/mymaterials/getAllMyMaterials')
const removeMaterial = require('../controller/mymaterials/removeMaterial')
const searchForMaterial = require('../controller/mymaterials/searchForMaterial')
const expensiveMaterial = require('../controller/mymaterials/expensiveMaterial')
const allProductUnderAndAlmostFineshed = require('../controller/mymaterials/getMaterialsCloseToFinished')
const setMinPlace = require('../controller/mymaterials/setMinForMaterial')
const setQuantity = require('../controller/mymaterials/setQuantity')

const enterMaterial = require('../controller/mymaterials/enterMaterialMenualy')



/* GET home page. */
router.get('/',getAllMaterials.getAllMyMaterialsJ, function(req, res, next) {
  
});

router.get('/search',searchForMaterial.searchForMaterial, function(req, res, next) {
  
});

router.post('/setminmat',setMinPlace.setMinMinPlace, function(req, res, next) {
  
});

router.post('/setquantity',setQuantity.setquantityPlace, function(req, res, next) {
  
});
router.post('/addmaterial',enterMaterial.addaterialToMyMaterials, function(req, res, next) {
  
});



router.get('/almostdone',allProductUnderAndAlmostFineshed.getMaterialsAlmostFinished, function(req, res, next) {
  
});



router.post('/removematerial',removeMaterial.deleteMyMaterial, function(req, res, next) {
  
});

router.get('/topexpensive',expensiveMaterial.getAllExpensiveMateial, function(req, res, next) {
  
});
router.get('/underminimum',allProductUnderAndAlmostFineshed.getMaterialThatFinished, function(req, res, next) {
  
});
module.exports = router;
