/* eslint-disable max-len */
import {
    successResponce,
    errorResponce,
} from '@utils/exchange';
import userModule from '@helper/user';
import hashingUtil from '../../utils/hashing';
import authyModule from '../../helper/auth';
import Log from '../../middlewares/Log';
// import notification from '../../utils/notification';

export default class Auth {
    static async signUp(req, res) {
        try {
            const created = await userModule.create(req.body, req.requestIp);
            const publicUserData = await userModule.getWithPublicData({
                id: created.id,
            });
            return successResponce(req, res, 'User joinded successfully!', 202, publicUserData);
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }

    static async signIn(req, res) {
        try {
            const userData = await userModule.getWithPrivateData({
                email: req.body.email,
            });
            const verifyReturn = await hashingUtil.verifyPasswordHash(userData, req.body.password);
            if (verifyReturn) {
                const userPublicData = await userModule.getWithPublicData({
                    email: req.body.email,
                });
                if (!userPublicData.emailVerified) {
                    return successResponce(req, res, 'User not yet verified!', 202, userPublicData);
                }
                const authToken = await authyModule.createAuth(req, userPublicData.id);
                userPublicData.token = authToken.hash;
                return successResponce(req, res, 'User logged in successfully!', 202, userPublicData);
            }
            return errorResponce(req, res, [{
                msg: 'Invalid password please check',
                param: 'password',
            }], 403);
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }

    static async signOut(req, res) {
        try {
            await authyModule.updateAuth(req.params.hash, 'inactive');
            return successResponce(req, res, 'User logged out successfully!', 202, {});
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }

    static async emailVerification(req, res) {
        try {
            const userData = await userModule.getWithPrivateData({
                email: req.body.email,
            });
            const emailAuthData = userData.authData.email_verify || null;
            if (!emailAuthData) {
                return errorResponce(req, res, [{
                    msg: 'invalid OTP',
                    param: 'otp',
                }], 403);
            }
            if (emailAuthData.otp !== req.body.otp) {
                return errorResponce(req, res, [{
                    msg: 'OTP incorrect',
                    param: 'otp',
                }], 403);
            }
            await userModule.update({ email: req.body.email }, { emailVerified: true });
            const userPublicData = await userModule.getWithPublicData({
                email: userData.email,
            });
            const authToken = await authyModule.createAuth(req, userPublicData.id);
            userPublicData.token = authToken.hash;
            return successResponce(req, res, 'User email verified successfully!', 202, userPublicData);
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }

    static async sendOTP(req, res) {
        try {
            const userData = await userModule.getWithPrivateData({
                email: req.body.email,
            });
            const authData = await userModule.createAuthData(req.body.type, userData.authData);
            await userModule.update({
                email: req.body.email,
            }, { authData });
            // const data = await notification.sendEmail(
            // req.body.email,'', 'email_auth', { otp: '' });
            return successResponce(req, res, 'OTP sent successfully, please check your email', 202, {});
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }

    static async resetPassword(req, res) {
        try {
            const userData = await userModule.getWithPrivateData({
                email: req.body.email,
            });
            const passwordAuthData = userData.authData.reset_password || null;
            if (!passwordAuthData) {
                return errorResponce(req, res, [{
                    msg: 'invalid OTP',
                    param: 'otp',
                }], 403);
            }
            if (passwordAuthData.otp !== req.body.otp) {
                return errorResponce(req, res, [{
                    msg: 'OTP incorrect',
                    param: 'otp',
                }], 403);
            }
            const hashed = await hashingUtil.createPasswordHash(req.body.password);
            await userModule.update({ email: req.body.email }, {
                password: hashed.password,
                salt: hashed.salt,
            });
            return successResponce(req, res, 'Password reset done successfully!', 202, {});
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }

    static async changePassword(req, res) {
        try {
            const userData = await userModule.getWithPrivateData({
                id: req.userID,
            });
            const verifyReturn = await hashingUtil.verifyPasswordHash(userData, req.body.current_password);
            if (verifyReturn) {
                const hashed = await hashingUtil.createPasswordHash(req.body.password);
                await userModule.update({ id: req.userID }, {
                    password: hashed.password,
                    salt: hashed.salt,
                });

                return successResponce(req, res, 'Password change done successfully!', 202, {});
            }
            return errorResponce(req, res, [{
                msg: 'Invalid current password please check',
                param: 'current_password',
            }], 403);
        } catch (err) {
            Log.error(err);
            return errorResponce(req, res, [{
                msg: 'Unexprected error from server',
                param: 'server',
            }], 200);
        }
    }
}
