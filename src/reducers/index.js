import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  featureReducer,
  user: profileReducer,
});
