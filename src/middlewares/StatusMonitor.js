import expressStatusMonitor from 'express-status-monitor';

import Log from './Log';
import Locals from '../providers/Locals';

class StatusMonitor {
  static mount(_express) {
    Log.info('Booting the \'StatusMonitor\' middleware...');

    // Define your status monitor config
    const monitorOptions = {
      title: Locals.name,
      path: '/status-monitor',
      spans: [
        {
          interval: 1, // Every second
          retention: 60, // Keep 60 data-points in memory
        },
        {
          interval: 5,
          retention: 60,
        },
        {
          interval: 15,
          retention: 60,
        },
      ],
      chartVisibility: {
        mem: true,
        rps: true,
        cpu: true,
        load: true,
        statusCodes: true,
        responseTime: true,
      },
      healthChecks: [
        {
          protocol: Locals.env === 'production' ? 'https' : 'http',
          host: 'localhost',
          path: '/web',
          port: Locals.port,
        },
        {
          protocol: Locals.env === 'production' ? 'https' : 'http',
          host: 'localhost',
          path: '/api',
          port: Locals.port,
        },
      ],
    };

    // Loads the express status monitor middleware
    _express.use(expressStatusMonitor(monitorOptions));

    return _express;
  }
}

export default StatusMonitor;
