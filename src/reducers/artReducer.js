import {
  ADD_FILE, REMOVE_FILE, SET_USER_REQUEST,GET_CATEGORIES_FILES, SET_FILE_ERROR
} from '../actions/types';

const initialState = {
  files: [],
  isLoading: true,
  categories:[],
  error: ''
};


function artReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILE: {
      return {
        ...state,
        files: state.files.concat(action.payload),
        isLoading: false
      };
    }

    case REMOVE_FILE: {
      const removeItemID = action.payload.id;

      const removedFileFromState = state.files.filter( file => file.id !== removeItemID);

      const emptyFiles = removedFileFromState.length > 0 ? true :false;

      return {
        ...state,
        files: removedFileFromState,
        isLoading: emptyFiles
      };
    }

    case SET_USER_REQUEST:
      return {
        isLoading: true,
      };

    case GET_CATEGORIES_FILES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_FILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
export default artReducer;


