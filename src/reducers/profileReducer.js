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
} from '../actions/types';

const initialState = {
  isLoading: false,
  isGettingArts: true,
  editProfileSuccess: {},
  userProfile: {},
  userArts: [],
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
    case GET_USER_ART_REQUEST:
      return {
        isGettingArts: true,
      };
    case GET_USER_ART_SUCCESS:
      return {
        ...state,
        userArts: action.payload,
        isGettingArts: false,
      };
    case GET_USER_ART_ERROR:
      return {
        error: action.payload,
        isGettingArts: false,
      };
    case EDIT_PROFILE_REQUEST:
      return {
        isLoading: true,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        editProfileSuccess: action.payload,
        isLoading: false,
      };
    case EDIT_PROFILE_ERROR:
      return {
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
