import MD5 from 'md5';
import Locals from '@providers/Locals';
import commonUtil from './common';

export default class hashingModule {
    static async createPasswordHash(_password) {
        const salt = await commonUtil.randomGenerator(10);
        return {
            salt,
            password: await MD5(MD5(_password) + salt),
        };
    }

    static async verifyPasswordHash(password, salt, hash) {
        return await MD5(MD5(password) + salt) === hash;
    }

    static async authHashGenerator() {
        return MD5(Locals.config().name + MD5(new Date().getTime()) + Locals.config().appSecret);
    }
}
