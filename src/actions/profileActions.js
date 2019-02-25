/* eslint-disable camelcase */
import axios from 'axios';
import setHeader from '../utils/setHeader';
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_USER_ART_REQUEST,
  GET_USER_ART_SUCCESS,
  GET_USER_ART_ERROR,
} from './types';
import { basePath } from '../utils/basePath';
import Notify from '../utils/Notify';

export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST,
});
export const getProfileSuccess = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload,
});
export const getProfileError = error => ({
  type: GET_PROFILE_ERROR,
  payload: error,
});

export const getUserArtsRequest = () => ({
  type: GET_USER_ART_REQUEST,
});
export const getUserArtsSuccess = payload => ({
  type: GET_USER_ART_SUCCESS,
  payload,
});
export const getUserArtsError = error => ({
  type: GET_USER_ART_ERROR,
  payload: error,
});

export const getUserProfile = userId => async (dispatch) => {
  setHeader();
  dispatch(getProfileRequest());
  try {
    const res = await axios.get(`${basePath}/users/${userId}/profile`);
    const payload = res.data.data.user;
    dispatch(getProfileSuccess(payload));
  } catch (err) {
    dispatch(getProfileError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};

export const getUserArts = userId => async (dispatch) => {
  setHeader();
  dispatch(getUserArtsRequest());
  try {
    const res = await axios.get(`${basePath}/arts/${userId}/profile`);
    const payload = res.data.data.articles;
    dispatch(getUserArtsSuccess(payload));
  } catch (err) {
    dispatch(getUserArtsError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};
