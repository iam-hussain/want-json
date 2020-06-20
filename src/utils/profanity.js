import Profanease from 'profanease';
import Locals from '../providers/Locals';

const list = [...new Set(['admin', 'support', 'wantjson', Locals.name])];

const isProfane = new Profanease({ lang: 'all', list });

export const profaneCheck = (str) => (isProfane.check(str));
export const profaneClean = (str) => (isProfane.clean(str));
