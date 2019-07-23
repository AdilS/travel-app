var express = require('express');
var adminCtrl =require('../controllers/admin.controller');
const router=express.Router();

router.route('/checkcategory').get(adminCtrl.checkCategory);
//   .post(userCtrl.create)
//router.route().get.post();

router.route('/addcategory').post(adminCtrl.create);
router.route('/getcategory').get(adminCtrl.getcategory);
router.route('/getcategorybyId/:catId').get(adminCtrl.getcategorybyId);
router.param('catId', adminCtrl.catById)

//router.param('shopId', shopCtrl.shopByID)
module.exports = router;

