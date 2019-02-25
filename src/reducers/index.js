import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  auth: authReducer,
  featureReducer,
  comment: commentReducer,
});
