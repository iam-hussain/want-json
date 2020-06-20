import { Router } from 'express';
import Log from '../middlewares/Log';
import { errorResponce } from '../utils/exchange';
import settingController from '../controllers/System/Setting';

const router = Router();

router.get('/sitemap', [settingController.generatePayloadSiteMap]);

router.all('*', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
  return errorResponce(req, res, 'URL not found from server', 404, 'server');
});

export default router;
