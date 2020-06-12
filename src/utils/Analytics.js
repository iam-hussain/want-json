import ReactGA from 'react-ga';
import cookie from 'js-cookie';

export const initGA = () => {
  ReactGA.initialize(process.env.GA_TRAKING_ID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search, token: cookie.get('token') || 'Guest' });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
