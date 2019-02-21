import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  userProfile: [],
  error: '',
};

/**
 * @param {object} state
 * @param {object} action
 *  @returns {object} state, user
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        isLoading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        isLoading: false,
      };
    case GET_PROFILE_ERROR:
      return {
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
