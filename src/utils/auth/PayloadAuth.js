import bigInt from 'big-integer';
import payloadModule from '../../helper/payload';
import { errorResponce } from '../exchange';

export default async function payloadAuthorization(req, res, next) {
  try {
    const urlData = await payloadModule.getFullData({ url: req.params.url })
      .then((data) => (data ? data.get({ plain: true }) : {}));
    console.log('==urlData.visibility===', urlData.visibility, '==req.method==', req.method);
    if (!urlData.visibility !== 'public' && req.method !== 'get') {
      const { authorization } = req.headers;
      if (!authorization) {
        return errorResponce(req, res, 'No authorization is found in header', 401, 'token');
      }
      if (authorization.split(' ').length > 1) {
        const hash = authorization.split(' ')[1];
        const authyData = await payloadModule.existCheck({ hash, url: req.params.url });
        if (!authyData) {
          return errorResponce(req, res, 'Invalid token found in header, Please check your token', 401, 'token');
        }
        req.hash = req;
        return next();
      }
      return errorResponce(req, res, 'Invalid authorization is found in header', 401, 'token');
    }
    return next();
  } catch (_error) {
    return errorResponce(req, res, 'Unknown error on authorization, Please check your token', 401, 'token');
  }
}


export async function countHits(req, res, next) {
  try {
    const payload = await payloadModule.getFullData({ url: req.params.url });
    await payload.update({ hitCount: bigInt(payload.hitCount).next() });
    return next();
  } catch (_error) {
    return errorResponce(req, res, 'Something went wrong!', 401, 'server');
  }
}
