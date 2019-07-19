import  express from '../express';
import userCtrl from '../controllers/user.controller';
const router=express.Router();

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)
//router.route().get.post();

//router.route('/api/signup').post(userCtrl.create);

export default router