import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  common: commonReducer,
  user: userReducer,
});

export default rootReducer;
