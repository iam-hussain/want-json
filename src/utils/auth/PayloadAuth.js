import payloadModule from '../../helper/payload';
import { errorResponce } from '../exchange';

export default async function payloadAuthorization(req, res, next) {
  try {
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
  } catch (_error) {
    return errorResponce(req, res, 'Unknown error on authorization, Please check your token', 401, 'token');
  }
}
