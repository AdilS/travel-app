var express = require('express');
var userCtrl =require('../controllers/user.controller');
const router=express.Router();

router.route('/users')
  .get(userCtrl.list)
  .post(userCtrl.create)
//router.route().get.post();

//router.route('/api/signup').post(userCtrl.create);

module.exports = router;