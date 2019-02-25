import artReducer from '../../reducers/artReducer';
import {
  ADD_FILE, REMOVE_FILE, SET_USER_REQUEST,GET_CATEGORIES_FILES, SET_FILE_ERROR
} from '../../actions/types';
import {createArt} from '../__mocks__/createArtMock';


it('should handle action of type ADD_FILE', () => {
  const action = {
    type: ADD_FILE,
    payload: createArt.image1
  };
  const newState = artReducer({
    files: [],
    },
    action);

  expect(newState.files[0]).toEqual(action.payload);
});


it('should handle action of type REMOVE_FILE single image pre-existing', () => {
  const action = {
    type: REMOVE_FILE,
    payload: createArt.image1
  };

  const newState = artReducer({
    files: [createArt.image1],
  }, action);
  expect(newState.files.length).toEqual(0);
});

it('should handle action of type REMOVE_FILE multiple images pre-existing', () => {
  const action = {
    type: REMOVE_FILE,
    payload: createArt.image1
  };

  const newState = artReducer({
    files: [createArt.image2,createArt.image1],
  }, action);

  expect(newState.files.length).toEqual(1);
});

it('should handle type SET_USER_REQUEST', () => {
  const action = {
    type: SET_USER_REQUEST,
    payload: {
      isLoading: true,
    },
  };
  const newState = artReducer(false, action);
  expect(newState.isLoading).toBe(true);
});


it('should handle type GET_CATEGORIES_FILES', () => {
  const action = {
    type: GET_CATEGORIES_FILES,
    payload: createArt.allCategories,
  };
  const newState = artReducer({}, action);

  expect(newState.categories.length).toEqual(6);
});


it('should handle type SET_FILE_ERROR', () => {
  const action = {
    type: SET_FILE_ERROR,
    payload: {
      error: 'err message',
    },
  };
  const newState = artReducer({}, action);

  expect(newState.error.error).toEqual(action.payload.error);
});


it('should handle type default', () => {
  const action = {};
  const newState = artReducer(null, action);
  expect(newState).toEqual(null);
});
