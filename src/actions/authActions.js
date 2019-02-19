/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {
  SET_CURRENT_USER,
  SET_USER_REQUEST,
  SET_USER_ERROR,
  RESET_PASSWORD_EMAIL,
} from './types';
import { basePath } from '../utils/basePath';
import Notify from '../utils/Notify';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});
export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});
export const setUserError = error => ({
  type: SET_USER_ERROR,
  payload: error,
});
export const setPasswordResetEmail = response => ({
  type: RESET_PASSWORD_EMAIL,
  payload: response,
});
export const loginUser = userData => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await axios.post(`${basePath}/auth/signin`, userData);
    const { token } = res.data.data;
    const decoded = jwt_decode(token);
    localStorage.setItem('authToken', token);
    if (decoded) {
      window.location.replace('/profile');
    }
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch(setUserError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};

export const sendResetPasswordEmail = (body, history) => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await axios.post(
      `${basePath}/auth/forgot-password`,
      body,
    );
    dispatch(setPasswordResetEmail(res.data));
    Notify.notifySuccess('Email successfully sent');
    history.push('/login');
  } catch (err) {
    dispatch(setUserError(err.response.data.messages));
    Notify.notifyError('Email not successfully sent');
  }
};

export const completePasswordReset = (
  body, token, history,
) => async (dispatch) => {
  dispatch(setUserRequest()); 
  try {
    const headers = {
      'x-access-token': token,
    };
    await axios.put(
      `${basePath}/auth/forgot-password`,
      body,
      {
        headers,
      },
    );
    history.push('/login');
    Notify.notifySuccess('Password successfully updated');
  } catch (err) {
    const errorMessage = err.response.data.message || err.response.data.messages;
    dispatch(setUserError(errorMessage));
    Notify.notifyError('There was an error updating password');
  }
}
export const signUp = (userData, history) => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await axios.post(`${basePath}/auth/signup`, userData);
    const { token } = res.data.data;
    const decoded = jwt_decode(token);
    localStorage.setItem('authToken', token);
    if (decoded) {
      history.push('/profile');
    }
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch(setUserError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};
