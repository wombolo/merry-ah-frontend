import {
  CREATE_COMMENT,
  GET_COMMENTS,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  GET_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
} from '../actions/types';

const initialState = {
  isFetching: true,
  comments: [],
};
/**
 * @param {object} state
 * @param {object} action
 *  @returns {object} state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return {
        ...state,
        isFetching: true,
        comments: null,
        error: null,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        lastId: 0,
        isFetching: false,
        error: null,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        isDeleting: false,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload,
        ),
        isDeleting: false,
      };
    case EDIT_COMMENT_REQUEST:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_COMMENT_FAILURE:
      return {
        ...state,
        isEditing: false,
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        comments: action.payload,
      };
    default:
      return state;
  }
}
