import { GET_SINGLE_ART, SET_ALL_ART } from '../actions/types';

const initialState = {
  isLoading: true,
  arts: [],
};

/**
 * Art Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ART:
      return {
        details: action.payload,
        isLoading: false,
      };

    case SET_ALL_ART:
      return {
        ...state,
        arts: state.arts.concat(action.payload),
        isLoading: false,
      };

    default:
      return state;
  }
};
