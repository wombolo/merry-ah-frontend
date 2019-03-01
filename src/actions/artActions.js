import axios from 'axios';
// import dotenv from 'dotenv';
//
// dotenv.config();
import {
  GET_CATEGORIES_FILES,
  SET_FILE_ERROR, SET_UPLOAD_SUCCESS,
  SET_ALL_ART,
} from './types';

import Notify from '../utils/Notify';
import { basePath } from '../utils/basePath';

export const setCategories = payload => ({
  type: GET_CATEGORIES_FILES,
  payload,
});

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(`${basePath}/categories`);
    dispatch(setCategories(categories.data.data.categories.rows));
  } catch (e) {
    console.log(e.response);
  }
};

export const setUploadSuccess = () => ({
  type: SET_UPLOAD_SUCCESS,
});

export const setFileError = error => ({
  type: SET_FILE_ERROR,
  payload: error,
});

export const handleUploadImages = payload => async (dispatch) => {
  const imageURLs = [];
  dispatch(setUploadSuccess());

  const { files: images } = payload;

  const uploads = await images.map(async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'artcave_articles');
    formData.append('api_key', '199196371633358');
    formData.append('timestamp', (Date.now() / 1000) | 0);

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/wombolo/image/upload',
      formData,
      { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
    );

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
        media: JSON.stringify(mediaFiles[0]),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': payload.accessToken,
        },
      },
    );
    window.location.replace(`/arts/${postToBackEnd.data.data.slugifiedTitle}`);
  } catch (error) {
    console.log('--->', error.response)
    const errMessage = `${error.response.data.messages}. Try Again`;
    dispatch(setFileError(errMessage));
    Notify.notifyError(errMessage);
  }
};
export const setAllArt = payload => ({
  type: SET_ALL_ART,
  payload,
});

export const fetchAllArt = () => async (dispatch) => {
  try {
    const res = await axios.get(`${basePath}/arts/?limit=11`);
    const { data: arts } = res.data;

    dispatch(setAllArt(arts));
  } catch (err) {
    console.log(err);
  }
};
