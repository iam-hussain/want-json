import { Router } from 'express';
import Log from '../middlewares/Log';
import homeController from '../controllers/Home/Home';
import { errorResponce } from '../utils/exchange';

const router = Router();

router.get('/flushDB', homeController.flush);

router.all('*', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
  return errorResponce(req, res, 'URL not found from server', 404, 'server');
});

export default router;
