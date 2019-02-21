/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setHeader from '../utils/setHeader';
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from './types';
import { basePath } from '../utils/basePath';
import Notify from '../utils/Notify';

export const getProfileRequest = payload => ({
  type: GET_PROFILE_REQUEST,
  payload,
});
export const getProfileSuccess = () => ({
  type: GET_PROFILE_SUCCESS,
});
export const getProfileError = error => ({
  type: GET_PROFILE_ERROR,
  payload: error,
});
export const loginUser = userId => async (dispatch) => {
  setHeader();
  dispatch(getProfileRequest());
  try {
    const res = await axios.get(`${basePath}/users/${userId}/profile`);
    console.log(res);
    // dispatch(getProfileSuccess());
  } catch (err) {
    console.log(err);
    dispatch(getProfileError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};
