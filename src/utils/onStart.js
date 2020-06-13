import userModule from '../helper/user';
import DB from '../providers/Database';
import hashingUtil from './hashing';
import commonUtil from './common';
import Locals from '../providers/Locals';
import otpEmail from './email/otpEmail';

export default async function init() {
  const checkIsAdminExist = await userModule.existCheck({
    displayName: Locals.name,
  });
  if (!checkIsAdminExist) {
    const authData = await userModule.createAuthData('email_verify', {});
    const hashed = await hashingUtil.createPasswordHash(commonUtil.randomGenerator(10));
    await otpEmail(authData.email_verify.otp, Locals.contactEmail);
    await DB.models.User.create({
      email: Locals.contactEmail,
      displayName: Locals.name,
      password: hashed.password,
      salt: hashed.salt,
      joinedIP: 'localhost',
      authData,
    });
  }
}
