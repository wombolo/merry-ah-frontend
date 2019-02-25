import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import artReducer from './artReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  featureReducer,
  artReducer,
  user: profileReducer,
});
