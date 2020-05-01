import { Router } from 'express';
//import storeController from '../controllers/Store/Store';
import { shouldBeLoggedIn } from '../utils/auth/Web';

const router = Router();

//  Store CURD operation
//router.get('/:name', [storeController.read]);

router.get('/:name/:key', [shouldBeLoggedIn, storeController.readAll]);
router.get('/:name/:key/:id', [shouldBeLoggedIn, storeController.read]);
router.post('/:name/:key', [shouldBeLoggedIn, storeController.create]);
router.put('/:name/:key/:id', [shouldBeLoggedIn, storeController.update]);
router.delete('/:name/key/:id', [shouldBeLoggedIn, storeController.delete]);

export default router;
