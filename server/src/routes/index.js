import { Router } from 'express';
import homeController from '@controllers/Home/Home';

const router = Router();

router.get('/', homeController.index);

router.get('/flushDB', homeController.flush);


export default router;
