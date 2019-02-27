import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import bookmarkReducer from './bookmarkReducer';

export default combineReducers({
  auth: authReducer,
  bookmark: bookmarkReducer,
  featureReducer,
});
