import { Router } from 'express';
import Log from '../middlewares/Log';
import { validateRequest, errorResponce } from '../utils/exchange';
import payloadController from '../controllers/Payload/Payload';
import payloadAuthorization, { countHits } from '../utils/auth/PayloadAuth';
import {
  payloadReadALL, payloadRead, payloadCreate, payloadUpdate, payloadDelete,
} from '../utils/payload';

const router = Router();

router.get('/:url', [payloadReadALL, validateRequest, payloadAuthorization, countHits, payloadController.readAll]);
router.get('/:url/:id', [payloadRead, validateRequest, payloadAuthorization, countHits, payloadController.read]);
router.post('/:url', [payloadCreate, validateRequest, payloadAuthorization, countHits, payloadController.create]);
router.put('/:url/:id', [payloadUpdate, validateRequest, payloadAuthorization, countHits, payloadController.update]);
router.delete('/:url/:id', [payloadDelete, validateRequest, payloadAuthorization, countHits, payloadController.delete]);

router.all('*', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
  return errorResponce(req, res, 'URL not found from server', 404, 'server');
});

export default router;
