import { Router } from 'express';
import Log from '../middlewares/Log';
import homeController from '../controllers/Home/Home';
import { validateRequest, errorResponce } from '../utils/exchange';
import payloadController from '../controllers/Payload/Payload';
import payloadAuthorization from '../utils/auth/PayloadAuth';
import {
  payloadReadALL, payloadRead, payloadCreate, payloadUpdate, payloadDelete,
} from '../utils/payload';

const router = Router();

router.get('/', homeController.index);

router.get('/:url', [payloadReadALL, validateRequest, payloadAuthorization, payloadController.readAll]);
router.get('/:url/:id', [payloadRead, validateRequest, payloadAuthorization, payloadController.read]);
router.post('/:url', [payloadCreate, validateRequest, payloadAuthorization, payloadController.create]);
router.put('/:url/:id', [payloadUpdate, validateRequest, payloadAuthorization, payloadController.update]);
router.delete('/:url/:id', [payloadDelete, validateRequest, payloadAuthorization, payloadController.delete]);

router.get('/flushDB', homeController.flush);

router.all('*', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
  return errorResponce(req, res, 'URL not found from server', 404, 'server');
});

export default router;
