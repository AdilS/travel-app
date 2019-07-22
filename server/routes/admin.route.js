var express = require('express');
var adminCtrl =require('../controllers/admin.controller');
const router=express.Router();

router.route('/checkcategory').get(adminCtrl.checkCategory);
//   .post(userCtrl.create)
//router.route().get.post();

router.route('/addcategory').post(adminCtrl.create);

module.exports = router;

