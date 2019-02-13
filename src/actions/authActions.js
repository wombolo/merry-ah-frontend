import axios from 'axios';
import { TEST_DISPATCH, RESET_PASSWORD_EMAIL, COMPLETE_PASSWORD_RESET } from './types';

const apiPath = 'https://merry-ah-staging.herokuapp.com/api/v1';
const localPath = 'http://localhost:9000/api/v1';

export const loginUser = userData => dispatch => {
  dispatch({
    type: TEST_DISPATCH,
    payload: userData
  })
}

export const sendResetPasswordEmail = (body) => async dispatch => {
  try {
    const sendRequest = await axios.post(
      localPath+'/auth/forgot-password',
      body
    );
    
    dispatch({
      type: RESET_PASSWORD_EMAIL,
      payload: sendRequest,
    })
    console.log(sendRequest);
  } catch(error) {
    console.log(error);
  }
}

export const completePasswordReset = (body) => async dispatch => {
  try {
    const sendRequest = await axios.put(
      localPath+'/auth/forgot-password',
      body,
      {
        'x-access-token': ''
      }
    );
    
    dispatch({
      type: COMPLETE_PASSWORD_RESET,
      payload: sendRequest,
    })
    console.log(sendRequest);
  } catch(error) {
    console.log(error);
  }
}
