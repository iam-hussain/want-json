import { Router } from 'express';
import homeController from '@controllers/Home/Home';
import authController from '@controllers/Auth/Auth';

const router = Router();

router.get('/', homeController.index);
router.post('/signup', authController.signUp);

export default router;
