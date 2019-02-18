import {
  SET_CURRENT_USER, SET_USER_ERROR, SET_USER_REQUEST, RESET_PASSWORD_EMAIL,
} from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  user: {},
  isAuthenticated: false,
  error: '',
  isLoading: false,
};
/**
 * @param {object} state
 * @param {object} action
 *  @returns {object} state, user
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_REQUEST:
      return {
        isLoading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
        isLoading: false,
      };
    case SET_USER_ERROR:
      return {
        error: action.payload,
        isLoading: false,
      };
    case RESET_PASSWORD_EMAIL:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
