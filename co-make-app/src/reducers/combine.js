import {combineReducers} from 'redux';
import {Auth as authReducer} from './auth_reduce';
import {Reg as regReducer} from './reg_reduce';

const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
    
  });
  export default rootReducer;