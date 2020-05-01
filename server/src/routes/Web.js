import { Router } from 'express';
import homeController from '@controllers/Home/Home';
import authController from '@controllers/Auth/Auth';
import { validateRequest } from '@utils/exchange';
import { registerRules, loginRules, sendOTPRules, emailVerifyRules, resetPasswordRules, changePasswordRules } from '../utils/validator';
import { shouldBeLoggedIn, shouldNotLoggedIn } from '../utils/auth/Web';
import storeController from '../controllers/Web/Store';

const router = Router();

router.get('/', homeController.index);

//  Auth API
router.post('/signup', [shouldNotLoggedIn, registerRules, validateRequest, authController.signUp]);
router.post('/signin', [shouldNotLoggedIn, loginRules, validateRequest, authController.signIn]);
router.get('/signout/:hash', [authController.signOut]);

router.post('/send_otp', [shouldNotLoggedIn, sendOTPRules, validateRequest, authController.sendOTP]);
router.post('/email_verify', [shouldNotLoggedIn, emailVerifyRules, validateRequest, authController.emailVerification]);
router.post('/reset_password', [shouldNotLoggedIn, resetPasswordRules, validateRequest, authController.resetPassword]);
router.post('/change_password', [shouldBeLoggedIn, changePasswordRules, validateRequest, authController.changePassword]);


router.get('/store', [shouldBeLoggedIn, storeController.readAll]);
router.get('/store/:name', [shouldBeLoggedIn, storeController.read]);
router.post('/store/', [shouldBeLoggedIn, storeController.create]);
router.put('/store/:name', [shouldBeLoggedIn, storeController.update]);
router.delete('/store/:name', [shouldBeLoggedIn, storeController.delete]);

export default router;
