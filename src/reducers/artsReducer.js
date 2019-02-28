import {
  SET_ALL_ART,
} from '../actions/types';

const initialState = {
  arts: [],
  isLoading: true,
};
/**
 * @param {object} state
 * @param {object} action
 *  @returns {object} state, user
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_ART:
      return {
        ...state,
        arts: state.arts.concat(action.payload),
        isLoading: false,
      };

    default:
      return state;
  }
}
