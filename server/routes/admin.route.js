var express = require('express');
var adminCtrl =require('../controllers/admin.controller');
const router=express.Router();

router.route('/checkcategory').get(adminCtrl.checkCategory);

router.route('/addcategory').post(adminCtrl.create);
router.route('/addhotel').post(adminCtrl.addhotel);
router.route('/getcategory').get(adminCtrl.getcategory);
router.route('/getcategorybyId/:catId').get(adminCtrl.getcategorybyId);
router.route('/updatecategorybyid/:catId').put(adminCtrl.updatecategorybyId)


router.route('/getamenities').get(adminCtrl.getamenities);
router.route('/filteramenities').post(adminCtrl.getamenitiesbyname);
router.route('/addamenity').post(adminCtrl.addamenity);
router.route('/getamenitybyId/:amenityId').get(adminCtrl.getamenitybyId);
router.route('/updateamenitybyid/:amenityId').put(adminCtrl.updateamenitybyId);

router.route('/addhotel').post(adminCtrl.addhotel);
router.route('/filterhotels').post(adminCtrl.filterhotels);
router.route('/gethotel').get(adminCtrl.gethotel);

router.param('catId', adminCtrl.catById)
router.param('amenityId', adminCtrl.amenityId)

module.exports = router;

