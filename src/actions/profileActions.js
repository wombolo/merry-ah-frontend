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
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
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

export const editProfileRequest = () => ({
  type: EDIT_PROFILE_REQUEST,
});
export const editProfileSuccess = payload => ({
  type: EDIT_PROFILE_SUCCESS,
  payload,
});
export const editProfileError = error => ({
  type: EDIT_PROFILE_ERROR,
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
    dispatch(getProfileError(err.response));
    Notify.notifyError('There was an error getting comments');
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

const handleUpload = async (imageFile) => {
  const form = new FormData();
  form.append('upload_preset', 'julietPreset');
  form.append('file', imageFile);
  const uploadedImage = await axios
    .post('https://api.cloudinary.com/v1_1/julietezekwe/image/upload', form);
  return uploadedImage;
};

export const editProfile = userDetails => async (dispatch) => {
  setHeader();
  dispatch(editProfileRequest());
  try {
    const image = await handleUpload(userDetails.imgURL);
    const [resolved] = await Promise.all([image]);
    userDetails.imgURL = resolved.data.secure_url;
    const res = await axios
      .put(`${basePath}/users/profile-update`, userDetails);
    const payload = res.data;
    dispatch(editProfileSuccess(payload));
    Notify.notifySuccess('Profile updated successfully');
  } catch (err) {
    dispatch(editProfileError(err.response.data.messages));
    Notify.notifyError('There was an error updating your profile');
  }
};
