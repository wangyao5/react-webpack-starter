import { combineReducers } from 'redux';
import { loginReducer } from './userReducer';

const rootReducer = combineReducers({
    loginReducer
});

export default rootReducer