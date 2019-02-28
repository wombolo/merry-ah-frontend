import axios from 'axios';
import {
  CREATE_COMMENT,
  GET_COMMENTS,
  CREATE_COMMENT_ERROR,
  GET_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST,
} from './types';
import { basePath } from '../utils/basePath';
import Notify from '../utils/Notify';


const creatCommentRequest = () => ({
  type: CREATE_COMMENT,
});

const createCommentSuccess = commentData => ({
  type: CREATE_COMMENT_SUCCESS,
  commentData,
});

const createCommentFailure = () => ({
  type: CREATE_COMMENT_ERROR,
});
export const createComment = (artId, commentData) => async (dispatch) => {
  dispatch(creatCommentRequest());
  try {
    const res = await axios
      .post(`${basePath}/arts/comments/${artId}`, commentData);
    dispatch(createCommentSuccess(res.data));
    Notify.notifySuccess('comment added');
  } catch (err) {
    dispatch(createCommentFailure(err.response.data));
  }
};
const getCommentRequest = () => ({
  type: GET_COMMENT_REQUEST,
});
const getCommentSuccess = comments => ({
  type: GET_COMMENTS,
  payload: comments,
});
export const getComments = (artId, lastId, limit) => async (dispatch) => {
  dispatch(getCommentRequest());
  try {
    const res = await axios
      .get(
        `${basePath}/arts/comments/${artId}?lastId=${lastId}&limit=${limit}`,
      );
    dispatch(getCommentSuccess(res.data));
  } catch (err) {
    Notify.notifyError(err.response.data.messages);
  }
};

const deleteCommentRequest = () => ({
  type: DELETE_COMMENT_REQUEST,
});

const deleteCommentSuccess = commentId => ({
  type: DELETE_COMMENT_SUCCESS,
  commentId,
});

const deleteCommentFailure = () => ({
  type: DELETE_COMMENT_FAILURE,
});
export const deleteComment = commentId => async (dispatch) => {
  dispatch(deleteCommentRequest());
  try {
    await axios.delete(`${basePath}/arts/comments/${commentId}`);
    Notify.notifySuccess('comment deleted');
    dispatch(deleteCommentSuccess(commentId));
  } catch (err) {
    dispatch(deleteCommentFailure());
  }
};

const editCommentRequest = () => ({
  type: EDIT_COMMENT_REQUEST,
});

const editCommentFailure = () => ({
  type: EDIT_COMMENT_FAILURE,
});
export const editComment = editCommentData => async (dispatch) => {
  dispatch(editCommentRequest());
  const {
    commentId, body, artId, lastId, limit,
  } = editCommentData;
  try {
    await axios.put(
      `${basePath}/arts/comments/${commentId}`, { body },
    );
    dispatch(getComments(artId, lastId, limit));
    Notify.notifySuccess('comment edited');
  } catch (err) {
    dispatch(editCommentFailure());
  }
};
