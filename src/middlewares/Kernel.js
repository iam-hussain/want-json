import CORS from './CORS';
import Http from './Http';

export default function Kernel(_express) {
  let express = _express;
  // Mount CORS middleware
  express = CORS.mount(_express);
  // Mount basic express apis middleware
  express = Http.mount(_express);
  return express;
}
