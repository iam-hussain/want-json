import { check, body } from 'express-validator';
import userModule from '@helper/user';

const isEmail = check('email')
    .isEmail()
    .withMessage('Provied a valid Email ID!');

const isPassword = check('password')
    .isLength({ min: 8 })
    .withMessage('Provide a valid Password with min 8 letters');

const isEmailTaken = body('email').custom(async (value, { req }) => {
    if (await userModule.existCheck({ email: req.body.email })) {
        throw new Error('This Email ID is already registered, Try to Login!');
    }
    return true;
});

const isEmailExist = body('email').custom(async (value, { req }) => {
    if (!await userModule.existCheck({ email: req.body.email })) {
        throw new Error('This Email ID is not registered yet, Try to Register!');
    }
    return true;
});

const isOTP = check('otp')
    .notEmpty()
    .withMessage('Provied a valid OTP!');

const isCurrentPassword = check('current_password')
    .isLength({ min: 8 })
    .withMessage('Provide a valid Password with min 8 letters');

const isAuthType = check('type')
    .isIn(['email_verify', 'reset_password'])
    .withMessage('Provide a valid OTP type');


export const registerRules = [isEmail, isPassword, isEmailTaken];
export const loginRules = [isEmail, isPassword, isEmailExist];
export const sendOTPRules = [isEmail, isEmailExist, isAuthType];
export const emailVerifyRules = [isEmail, isEmailExist, isOTP];
export const resetPasswordRules = [isEmail, isEmailExist, isOTP, isPassword];
export const changePasswordRules = [isOTP, isCurrentPassword, isPassword];
