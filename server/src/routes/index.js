import { Router } from 'express';
import homeController from '@controllers/Home/Home';

const router = Router();

router.get('/', homeController.index);

// router.get('/:name/:key', [shouldBeLoggedIn, storeController.readAll]);
// router.get('/:name/:key/:id', [shouldBeLoggedIn, storeController.read]);
// router.post('/:name/:key', [shouldBeLoggedIn, storeController.create]);
// router.put('/:name/:key/:id', [shouldBeLoggedIn, storeController.update]);
// router.delete('/:name/key/:id', [shouldBeLoggedIn, storeController.delete]);

router.get('/flushDB', homeController.flush);

export default router;
