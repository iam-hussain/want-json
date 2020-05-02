import userReducer from './userReducer';
import alertReducer from './alertReducer';
import commonReducer from './commonReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer,
    common: commonReducer
});

export default rootReducer;