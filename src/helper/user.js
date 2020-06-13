/* eslint-disable camelcase */
import DB from '../providers/Database';
import hashingUtil from '../utils/hashing';

export default class UserModule {
  static async existCheck(where) {
    return (
      (await DB.models.User.count({
        where,
      })) > 0
    );
  }

  static countBy(where) {
    return DB.models.User.count({
      where,
    });
  }

  static async getWithPublicData(where) {
    const returnData = await DB.models.User.findOne({
      where,
      attributes: [
        'id',
        'displayName',
        'firstName',
        'lastName',
        'url',
        'email',
        'emailVerified',
        'passwordSet',
      ],
    }).then((userIs) => (userIs || {}));
    return returnData;
  }

  static async getWithPrivateData(where) {
    const returnData = await DB.models.User.findOne({
      where,
    }).then((userIs) => (userIs || {}));
    return returnData;
  }

  static async create(payLoad, requestIp) {
    const hashed = await hashingUtil.createPasswordHash(payLoad.password);
    const returnData = await DB.models.User.create({
      email: payLoad.email,
      password: hashed.password,
      salt: hashed.salt,
      joinedIP: requestIp.clientIp,
      authData: payLoad.authData,
    });
    return returnData;
  }

  static async update(where, payLoad) {
    const returnData = await DB.models.User.update(payLoad, {
      where,
    });
    return returnData;
  }

  static async createAuthData(type, existingData) {
    const OTP = await hashingUtil.emailOTP();
    if (type === 'email_verify') {
      return {
        ...existingData,
        email_verify: {
          otp: OTP,
          date: new Date(),
        },
      };
    }
    if (type === 'reset_password') {
      return {
        ...existingData,
        reset_password: {
          otp: OTP,
          date: new Date(),
        },
      };
    }
    return {
      ...existingData,
      general: {
        otp: OTP,
        date: new Date(),
      },
    };
  }
}
