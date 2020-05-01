import userReducer from './userReducer';
import alertReducer from './alertReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer
});

export default rootReducer;