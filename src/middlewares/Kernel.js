import CORS from './CORS';
import Http from './Http';
import StatusMonitor from './StatusMonitor';

export default function Kernel(_express) {
  let express = _express;
  // Mount CORS middleware
  express = CORS.mount(express);
  // Mount basic express apis middleware
  express = Http.mount(express);
  // Mount status monitor middleware
  express = StatusMonitor.mount(express);

  return express;
}
