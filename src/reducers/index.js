import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';

export default combineReducers({
  auth: authReducer, featureReducer,
});
