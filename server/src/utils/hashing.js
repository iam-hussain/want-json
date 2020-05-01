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

    static async verifyPasswordHash(userPrivateData, password) {
        return await MD5(MD5(password) + userPrivateData.salt) === userPrivateData.password;
    }

    static async authHashGenerator() {
        return `auth_${MD5(Locals.name + MD5(new Date().getTime()) + Locals.appSecret)}`;
    }

    static async storeHashGenerator(title) {
        return `${title}_${MD5(Locals.name + MD5(new Date().getTime()) + Locals.appSecret)}`;
    }

    static async publicIDGenerator() {
        return `id_${MD5(Locals.name + MD5(new Date().getTime()) + Locals.appSecret)}`;
    }

    static async emailOTP() {
        const otpIs = await commonUtil.randomGenerator(6);
        return otpIs;
    }
}
