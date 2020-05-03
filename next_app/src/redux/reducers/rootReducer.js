import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  common: commonReducer,
});

export default rootReducer;
