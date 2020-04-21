import { Router } from 'express';
import homeController from '@controllers/Home/Home';
import authController from '@controllers/Auth/Auth';
import { validateRequest } from '@utils/exchange';
import { registerRules, loginRules } from '../utils/validator';
import { shouldBeLoggedIn, shouldNotLoggedIn } from '../utils/auth/Web';
import storeController from '../controllers/Web/Store';

const router = Router();

router.get('/', homeController.index);

//  Auth API
router.post('/signup', [shouldNotLoggedIn, registerRules, validateRequest, authController.signUp]);
router.post('/signin', [shouldNotLoggedIn, loginRules, validateRequest, authController.signIn]);
router.get('/signout/:hash', [authController.signOut]);

router.get('/store', [shouldBeLoggedIn, storeController.readAll]);
router.get('/store/:name', [shouldBeLoggedIn, storeController.read]);
router.post('/store/', [shouldBeLoggedIn, storeController.create]);
router.put('/store/:name', [shouldBeLoggedIn, storeController.update]);
router.delete('/store/:name', [shouldBeLoggedIn, storeController.delete]);

export default router;
