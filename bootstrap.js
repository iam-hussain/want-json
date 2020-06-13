/* eslint-disable no-console */
import DB from './src/providers/Database';
import Log from './src/middlewares/Log';
import userModule from './src/helper/user';
import hashingUtil from './src/utils/hashing';
import commonUtil from './src/utils/common';
import Locals from './src/providers/Locals';
import otpEmail from './src/utils/email/otpEmail';

async function firstUser() {
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
    Log.info('First user created successfully');
  }
  return true;
}


async function Bootstrap() {
  console.log('Starting Bootstrap...');
  Log.info('Starting Bootstrap...');
  return DB.reSync().then(async () => {
    Log.info('DB tables dropped successfully');
    await firstUser();
    console.log('Bootstrap Completed...');
    Log.info('Bootstrap Completed...');
    return true;
  }).catch((error) => {
    Log.error(`Failed to bootstarp the DB server!! (${error})`);
    throw error;
  });
}

Bootstrap();
