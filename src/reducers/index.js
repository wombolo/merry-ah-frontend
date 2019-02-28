import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import artReducer from './artReducer';
import artsReducer from './artsReducer';
import commentReducer from './commentReducer';
import bookmarkReducer from './bookmarkReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  bookmark: bookmarkReducer,
  featureReducer,
  artReducer,
  art: artsReducer,
  comment: commentReducer,
  user: profileReducer,
  allArts: artsReducer,
});
