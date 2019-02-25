/* eslint-disable camelcase */
import axios from 'axios';
import {
  ADD_FILE,
  REMOVE_FILE,
  GET_CATEGORIES_FILES, SET_USER_REQUEST,
  SET_FILE_ERROR, SET_USER_ERROR
} from './types';

import Notify from '../utils/Notify';
import { basePath } from '../utils/basePath';

export const addFile = (payload) => ({
  type: ADD_FILE,
  payload
});

export const removeFile = (payload) => ({
  type: REMOVE_FILE,
  payload
});

export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});

export const setCategories = (payload) => ({
  type: GET_CATEGORIES_FILES,
  payload
});

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(`${basePath}/categories`);

    // console.log('<>>',categories.data.data.categories.rows);
    dispatch(setCategories(categories.data.data.categories.rows));
  } catch (e) {
    console.log(e.response);
  }
};
export const setFileError = error => ({
  type: SET_FILE_ERROR,
  payload: error,
});
export const handleUploadImages = (images, payload) => async (dispatch) =>  {
  let imageURLs = [];

  const uploads = await images.map(async (image)=> {

    const formData = new FormData();
    formData.append("file", image.file);
    formData.append("upload_preset", "artcave_articles"); // Replace the preset name with your own
    formData.append("api_key", "199196371633358"); // Replace API key with your own Cloudinary API key
    formData.append("timestamp", (Date.now() / 1000) | 0);

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/wombolo/image/upload",
      formData,
      { headers: { "X-Requested-With": "XMLHttpRequest" }});

    imageURLs.push({
      url: response.data.secure_url,
      extension: response.data.format,
    });

    return imageURLs;
  });

  const mediaFiles = await axios.all(uploads);

  try {
    const postToBackEnd = await axios.post(
      `${basePath}/arts/`,
      {
        ...payload,
        media: JSON.stringify(mediaFiles[0])
      },
      { headers: {
          "Content-Type": "application/json",
          "x-access-token": payload.accessToken
        }});
    window.location.replace('/')
    console.log('post>>', postToBackEnd);
  }
  catch (error) {
    const errMessage = `${error.response.data.messages}. Try Again`;
    dispatch(setFileError(errMessage));
    Notify.notifyError(errMessage)
  }

};

