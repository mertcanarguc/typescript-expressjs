import { Router } from 'express';
import { getUsers,addUser,updateUser } from '../controllers/userController'
const router = Router();

router.route('/').get(getUsers).post(addUser).put(updateUser)

export default router;