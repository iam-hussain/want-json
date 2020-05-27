/* eslint-disable max-len */
import { successResponce, errorResponce } from '../../utils/exchange';
import userModule from '../../helper/user';
import hashingUtil from '../../utils/hashing';
import authyModule from '../../helper/auth';
import otpEmail from '../../utils/email/otpEmail';

export default class Auth {
  static async signUp(req, res, next) {
    try {
      req.body.authData = await userModule.createAuthData('email_verify', {});
      const created = await userModule.create(req.body, req.requestIp);
      const publicUserData = await userModule.getWithPublicData({
        id: created.id,
      });
      const mailedData = await otpEmail(req.body.authData.email_verify.otp, req.body.email);
      if (!mailedData.success) {
        return errorResponce(req, res, 'Unexpected error on sending mail!', 200, {});
      }
      return successResponce(
        req,
        res,
        'Your Email registered successfully!',
        202,
        publicUserData,
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async signIn(req, res, next) {
    try {
      const userData = await userModule.getWithPrivateData({
        email: req.body.email,
      });
      const verifyReturn = await hashingUtil.verifyPasswordHash(
        userData,
        req.body.password,
      );
      if (!verifyReturn) {
        return errorResponce(
          req,
          res,
          [
            {
              msg: 'Your password does not matching, please check!',
              param: 'password',
            },
          ],
          403,
          'validation',
        );
      }

      const userPublicData = await userModule.getWithPublicData({
        email: req.body.email,
      });
      if (!userPublicData.emailVerified) {
        return errorResponce(
          req,
          res,
          'Your account email not yet verified!',
          202,
          'email_verify',
          userPublicData,
        );
      }
      const authToken = await authyModule.createAuth(req, userPublicData.id);
      return successResponce(
        req,
        res,
        'Your logged in successfully!',
        202,
        { ...userPublicData.dataValues, token: authToken.dataValues.hash },
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async signOut(req, res, next) {
    try {
      await authyModule.updateAuth(req.params.hash, 'inactive');
      return successResponce(
        req,
        res,
        'Your logged out successfully!',
        202,
        {},
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async emailVerification(req, res, next) {
    try {
      const userData = await userModule.getWithPrivateData({
        email: req.body.email,
      });
      const emailAuthData = userData.authData.email_verify || null;
      if (!emailAuthData) {
        return errorResponce(
          req,
          res,
          [
            {
              msg: 'Your OTP is invalid, Try to request OTP',
              param: 'otp',
            },
          ],
          403,
          'validation',
        );
      }
      if (emailAuthData.otp !== req.body.otp) {
        return errorResponce(
          req,
          res,
          [
            {
              msg: 'Your OTP does not matching, please check!',
              param: 'otp',
            },
          ],
          403,
          'validation',
        );
      }

      await userModule.update(
        { email: req.body.email },
        { emailVerified: true },
      );
      const userPublicData = await userModule.getWithPublicData({
        email: userData.email,
      });
      const authToken = await authyModule.createAuth(req, userPublicData.id);

      return successResponce(
        req,
        res,
        'Your Email verified successfully!',
        202,
        { ...userPublicData.dataValues, token: authToken.dataValues.hash },
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async sendOTP(req, res, next) {
    try {
      const userData = await userModule.getWithPrivateData({
        email: req.body.email,
      });
      const authData = await userModule.createAuthData(
        req.body.type,
        userData.authData,
      );
      await userModule.update(
        {
          email: req.body.email,
        },
        { authData },
      );
      const mailedData = await otpEmail(authData[req.body.type].otp, req.body.email);
      if (!mailedData.success) {
        return errorResponce(req, res, 'Unexpected error on sending mail!', 200, {});
      }
      return successResponce(
        req,
        res,
        'OTP sent successfully !',
        202,
        {},
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async resetPassword(req, res, next) {
    try {
      const userData = await userModule.getWithPrivateData({
        email: req.body.email,
      });
      const passwordAuthData = userData.authData.reset_password || null;
      if (!passwordAuthData) {
        return errorResponce(
          req,
          res,
          [
            {
              msg: 'Your OTP is invalid, Try to request OTP',
              param: 'otp',
            },
          ],
          403,
          'validation',
        );
      }
      if (passwordAuthData.otp !== req.body.otp) {
        return errorResponce(
          req,
          res,
          [
            {
              msg: 'Your OTP does not matching, please check!',
              param: 'otp',
            },
          ],
          403,
          'validation',
        );
      }

      const hashed = await hashingUtil.createPasswordHash(req.body.password);
      await userModule.update(
        { email: req.body.email },
        {
          password: hashed.password,
          salt: hashed.salt,
        },
      );
      return successResponce(
        req,
        res,
        'Your account password resetted successfully!',
        202,
        {},
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async changePassword(req, res, next) {
    try {
      const userData = await userModule.getWithPrivateData({
        id: req.userID,
      });
      const verifyReturn = await hashingUtil.verifyPasswordHash(
        userData,
        req.body.current_password,
      );
      if (!verifyReturn) {
        return errorResponce(
          req,
          res,
          [
            {
              msg: 'Your account current password is not matching, please check!',
              param: 'current_password',
            },
          ],
          403,
          'validation',
        );
      }

      const hashed = await hashingUtil.createPasswordHash(req.body.password);
      await userModule.update(
        { id: req.userID },
        {
          password: hashed.password,
          salt: hashed.salt,
        },
      );

      return successResponce(
        req,
        res,
        'Your account password changed successfully!',
        202,
        {},
      );
    } catch (_error) {
      return next(_error);
    }
  }
}
