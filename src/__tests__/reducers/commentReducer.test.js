import commentReducer from '../../reducers/commentReducer';
import * as actionTypes from '../../actions/types';

describe('Book Reducer', () => {
  it('should handle action CREATE COMMENT', () => {
    const action = {
      type: actionTypes.CREATE_COMMENT,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({
      isCreating: true,
    });
  });
  it('should handle action CREATE COMMENT ERROR', () => {
    const action = {
      type: actionTypes.CREATE_COMMENT_ERROR,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({ isCreating: false });
  });
  it('should handle action CREATE COMMENT SUCCESS', () => {
    const action = {
      type: actionTypes.CREATE_COMMENT_SUCCESS,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({ isCreating: false });
  });
  it('should handle action GET COMMENT REQUEST', () => {
    const action = {
      type: actionTypes.GET_COMMENT_REQUEST,
    };
    const newState = commentReducer({}, action);
    expect(newState.isFetching).toBe(true);
  });
  it('should handle action GET COMMENT SUCCESS', () => {
    const action = {
      type: actionTypes.GET_COMMENTS,
    };
    const newState = commentReducer({}, action);
    expect(newState.isFetching).toBe(false);
  });
  it('should handle action DELETE COMMENT FAILURE', () => {
    const action = {
      type: actionTypes.DELETE_COMMENT_FAILURE,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({ isDeleting: false });
  });
  it('should handle action DELETE COMMENT REQUEST', () => {
    const action = {
      type: actionTypes.DELETE_COMMENT_REQUEST,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({ isDeleting: true });
  });
  it('should handle action DELETE COMMENT SUCCESS', () => {
    const action = {
      type: actionTypes.DELETE_COMMENT_SUCCESS,
      commentId: 2,
    };
    const previousState = {
      comments: [{
        id: 1,
        body: 'comment',
      }, {
        id: 2,
        body: 'comment',
      }],
    };
    const newState = commentReducer(previousState, action);
    expect(newState.isDeleting).toBe(false);
  });
  it('should handle action EDIT COMMENT REQUEST', () => {
    const action = {
      type: actionTypes.EDIT_COMMENT_REQUEST,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({ isEditing: true });
  });
  it('should handle action EDIT COMMENT REQUEST', () => {
    const action = {
      type: actionTypes.EDIT_COMMENT_FAILURE,
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual({ isEditing: false });
  });
  it('should handle action EDIT COMMENT SUCCESS', () => {
    const action = {
      type: actionTypes.EDIT_COMMENT_SUCCESS,
    };
    const newState = commentReducer({}, action);
    expect(newState.isEditing).toEqual(false);
  });
});
