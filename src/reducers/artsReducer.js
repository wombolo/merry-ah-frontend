import { GET_SINGLE_ART } from '../actions/types';

const initialState = {
  isLoading: true,
};

/**
 * Art Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ART:
      return {
        details: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
