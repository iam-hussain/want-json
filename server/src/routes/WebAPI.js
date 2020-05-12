import {
    Router,
} from 'express';
import {
    validateRequest,
} from '@utils/exchange';
import {
    profileUpdateRules,
    registerRules,
    loginRules,
    sendOTPRules,
    emailVerifyRules,
    resetPasswordRules,
    changePasswordRules,
    createPayloadRules,
    updatePayloadRules,
    deletePayloadRules,
    getOnePayloadRules,
    restorePayloadRules,
    exploreOneRules,
} from '../utils/validator';
import {
    shouldBeLoggedIn,
    shouldNotLoggedIn,
} from '../utils/auth/WebAuth';
import authController from '../controllers/Auth/Auth';
import payloadController from '../controllers/Web/Payload';
import exploreController from '../controllers/Web/Explore';
import profileController from '../controllers/Web/Profile';
import homeController from '../controllers/Home/Home';

const router = Router();

router.get('/test', [homeController.index]);

//  Auth API
router.post('/signup', [shouldNotLoggedIn, registerRules, validateRequest, authController.signUp]);
router.post('/signin', [shouldNotLoggedIn, loginRules, validateRequest, authController.signIn]);
router.get('/signout/:hash', [authController.signOut]);

router.post('/send_otp', [shouldNotLoggedIn, sendOTPRules, validateRequest,
    authController.sendOTP,
]);
router.post('/email_verify', [shouldNotLoggedIn, emailVerifyRules, validateRequest, authController.emailVerification]);
router.post('/reset_password', [shouldNotLoggedIn, resetPasswordRules, validateRequest, authController.resetPassword]);
router.post('/change_password', [shouldBeLoggedIn, changePasswordRules, validateRequest, authController.changePassword]);

// Payload API
router.get('/payload', [shouldBeLoggedIn, payloadController.readAll]);
router.get('/payload/:id', [shouldBeLoggedIn, getOnePayloadRules, validateRequest, payloadController.read]);
router.post('/payload', [shouldBeLoggedIn, createPayloadRules, validateRequest, payloadController.create]);
router.put('/payload/:id', [shouldBeLoggedIn, updatePayloadRules, validateRequest, payloadController.update]);
router.delete('/payload/:id', [shouldBeLoggedIn, deletePayloadRules, validateRequest, payloadController.delete]);

router.get('/payload_deleted', [shouldBeLoggedIn, payloadController.readAllDeleted]);
router.delete('/payload_restore/:id', [shouldBeLoggedIn, restorePayloadRules, validateRequest, payloadController.restore]);

// Search API
router.post('/explore', [exploreController.readAll]);
router.get('/explore/:id', [exploreOneRules, validateRequest, exploreController.read]);

// Profile API
router.get('/profile', [shouldBeLoggedIn, profileController.get]);
router.put('/profile', [shouldBeLoggedIn, profileUpdateRules, validateRequest, profileController.update]);

export default router;
