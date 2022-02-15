import { Router } from 'express';
import { getUsers,addUser,updateUser } from '../user/userController'
import { getArticles,addArticle,updateArticle } from '../article/articleContoller'

const router = Router();

router.route('/')
  .get(getUsers)
  .post(addUser)
  .put(updateUser)

router.route('/article')
  .get(getArticles)
  .post(addArticle)
  .put(updateArticle)

export default router;