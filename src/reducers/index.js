import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import artsReducer from './artsReducer';

export default combineReducers({
  auth: authReducer,
  featureReducer,
  allArts: artsReducer,
});
