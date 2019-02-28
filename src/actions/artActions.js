/* eslint-disable camelcase */
import axios from 'axios';
import { SET_ALL_ART } from './types';
import { basePath } from '../utils/basePath';

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
