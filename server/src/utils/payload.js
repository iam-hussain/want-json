/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { param } from 'express-validator';
import { uniqBy } from 'lodash';
import payloadModule from '../helper/payload';

const isValidPayload = param('url').custom(async (value, { req }) => {
    if (value) {
        const payloadIs = await payloadModule.getFullData({
            url: value,
        }).then((p) => p.get({ plain: true }));
        if (!payloadIs.id) {
            throw new Error('No payload found in this URL!');
        }
        if (payloadIs.status !== 'active') {
            throw new Error('This payload is deleted by creator!');
        }
        if (req.method === 'POST' && payloadIs.type !== 'dynamic') {
            throw new Error('This payload is not a dynamic type, Only dynamic type can access this API!');
        }
        return true;
    }
    throw new Error('Provide a valid payload ID!');
});


const isValidPayloadID = param('id').custom(async (value, { req }) => {
    if (req.params.url) {
        if (value) {
            const payloadIs = await payloadModule.getFullData({
                url: req.params.url,
            }).then((p) => p.get({ plain: true }));
            if (!payloadIs.id) {
                throw new Error('No payload found in this URL!');
            }
            if (payloadIs.status !== 'active') {
                throw new Error('This payload is deleted by creator!');
            }
            if (payloadIs.type !== 'dynamic') {
                throw new Error('This payload is not a dynamic type, Only dynamic type can access this API!');
            }
            const isID = payloadIs.data.find((a) => a.id.toString() === value);
            if (!isID) {
                throw new Error('This ID is not matching with data in this payload!');
            }
            return true;
        }
        throw new Error('Provide a valid payload ID!');
    }
    return true;
});

export const payloadReadALL = [isValidPayload];
export const payloadRead = [isValidPayload, isValidPayloadID];
export const payloadCreate = [isValidPayload];
export const payloadUpdate = [isValidPayload, isValidPayloadID];
export const payloadDelete = [isValidPayload, isValidPayloadID];

export default class payloadFixerModule {
    static urlMaker(title) {
        return title.toLowerCase().replace(/[^a-z0-9]+/gi, '_');
    }

    static async validIt(data, type = 'dynamic') {
        let validated = data;
        if (type === 'dynamic') {
            validated = validated.map((p) => {
                if (!p.id) {
                    p.id = Math.random().toString(16).substring(8, 12);
                }
                p.id = p.id.toString().toLowerCase().replace(/[^a-z0-9]+/gi, '_');
                return p;
            });
            validated = uniqBy(validated, 'id');
        }
        return validated;
    }
}
