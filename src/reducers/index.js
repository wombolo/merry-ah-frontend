import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import artReducer from './artReducer';
import artsReducer from './artsReducer';

export default combineReducers({
  auth: authReducer,
  featureReducer,
  artReducer,
  art: artsReducer,
});
