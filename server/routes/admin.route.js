var express = require('express');
var adminCtrl =require('../controllers/admin.controller');
const router=express.Router();

router.route('/checkcategory').get(adminCtrl.checkCategory);
//   .post(userCtrl.create)
//router.route().get.post();

router.route('/addcategory').post(adminCtrl.create);
router.route('/getcategory').get(adminCtrl.getcategory);
router.route('/getcategorybyId/:catId').get(adminCtrl.getcategorybyId);
router.route('/updatecategorybyid/:catId').put(adminCtrl.updatecategorybyId)


router.route('/getamenities').get(adminCtrl.getamenities);
router.route('/filteramenities').post(adminCtrl.getamenitiesbyname);
router.route('/addamenity').post(adminCtrl.addamenity);
router.route('/getamenitybyId/:amenityId').get(adminCtrl.getamenitybyId);
router.route('/updateamenitybyid/:amenityId').put(adminCtrl.updateamenitybyId)

router.param('catId', adminCtrl.catById)
router.param('amenityId', adminCtrl.amenityId)

//router.param('shopId', shopCtrl.shopByID)
module.exports = router;

