import { Router } from 'express';
import homeController from '@controllers/Home/Home';
import {
    validateRequest,
} from '@utils/exchange';
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

export default router;
