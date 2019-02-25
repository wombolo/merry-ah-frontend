import axios from 'axios';
import { basePath } from '../utils/basePath';
import { GET_SINGLE_ART, SET_USER_ERROR } from './types';

export const setUserError = error => ({
  type: SET_USER_ERROR,
  payload: error,
});

export const setSingleArt = response => ({
  type: GET_SINGLE_ART,
  payload: response,
});

export const getSingleArt = slug => async (dispatch) => {
  try {
    const art = await axios.get(`${basePath}/arts/${slug}`);

    dispatch(setSingleArt(art.data.data));
  } catch (error) {
    dispatch(setUserError(error.response));
  }
};
