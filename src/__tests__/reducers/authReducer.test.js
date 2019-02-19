import authReducer from '../../reducers/authReducer';
import {
  SET_CURRENT_USER, SET_USER_ERROR, SET_USER_REQUEST, RESET_PASSWORD_EMAIL,
} from '../../actions/types';
import { loginMockData as mockData } from '../__mocks__/userMock';

it('should handle action handle action of type GET_PRODUCTS', () => {
  const action = {
    type: SET_CURRENT_USER,
    payload: {
      email: 'dadadad',
      password: 'musasasa',
      token: '12121212313aa',
    },
  };
  const newState = authReducer({}, action);
  expect(newState.user).toEqual(action.payload);
});
it('should handle type SET_USER_ERROR', () => {
  const action = {
    type: SET_USER_ERROR,
    payload: {
      error: 'lololol',
    },
  };
  const newState = authReducer('', action);
  expect(newState.error.error).toEqual(action.payload.error);
});
it('should handle type SET_USER_REQUEST', () => {
  const action = {
    type: SET_USER_REQUEST,
    payload: {
      isLoading: true,
    },
  };
  const newState = authReducer(false, action);
  expect(newState.isLoading).toBe(true);
});
it('should handle type RESET_PASSWORD_EMAIL', () => {
  const { resetEmailResponse } = mockData;
  const action = {
    type: RESET_PASSWORD_EMAIL,
    payload: resetEmailResponse,
  };
  const newState = authReducer({}, action);
  expect(newState.response).toEqual(action.payload);
});
