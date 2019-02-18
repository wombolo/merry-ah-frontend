import {
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
  SET_INIT_SLIDE,
} from '../actions/types';

const initialState = {
  artList: [],
  activeList: [],
};

/**
 *  @param {function} state
 * @param {function} action
 *  @returns {Object} action obj
 */
function featureReducer(state = initialState, action) {
  if (action.type === SET_INIT_SLIDE) {
    return Object.assign({}, state, {
      activeList: action.payload.artList.slice(0, 3),
      artList: action.payload.artList,
    });
  }
  if (action.type === SET_NEXT_SLIDE) {
    if (state.activeList.length === 2) {
      return Object.assign({}, state, {
        activeList: state.artList.slice(0, 3),
      });
    }
    const secondItem = state.activeList[1].objectID;

    /**
     * @params {object}
     * @returns {index}
     */
    const found = state.artList
      .findIndex(element => element.objectID === secondItem);

    return Object.assign({}, state, {
      activeList: state.artList.slice(found, found + 3),
    });
  }
  if (action.type === SET_PREVIOUS_SLIDE) {
    const secondItem = state.activeList[1].objectID;

    if (state.activeList[1].objectID === state.artList[1].objectID) {
      return Object.assign({}, state, {
        activeList: state.artList.slice(0, 3),
      });
    }

    /**
     * @params {object}
     * @returns {index}
     */
    const found = state.artList
      .findIndex(element => element.objectID === secondItem);

    return Object.assign({}, state, {
      activeList: state.artList.slice(found - 2, found + 1),
    });
  }
  return state;
}

export default featureReducer;
