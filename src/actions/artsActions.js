import axios from 'axios';
import { basePath } from '../utils/basePath';
import { GET_SINGLE_ART, SET_USER_ERROR, DELETE_SINGLE_ART } from './types';
import Notify from '../utils/Notify';

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

export const deleteSingleArt = slug => async (dispatch) => {

  try {
    await axios.delete(`${basePath}/arts/${slug}`,
      {
        headers: {
          'x-access-token': localStorage.getItem('authToken'),
        },
      });
    console.log('---->>>');

    dispatch(() => ({ type: DELETE_SINGLE_ART }));
    await Notify.notifySuccess('Art deleted successfully');
    window.location.replace('/arts');
  } catch (error) {
    Notify.notifyError(
      'Unable to complete this request. Please try again later.',
    );
  }
};
