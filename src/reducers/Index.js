import {combineReducers} from 'redux';
import {authReducer} from './Auth';

const rootReducer = combineReducers({
    user: authReducer,
  });

  export default rootReducer;

