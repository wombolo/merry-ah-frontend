import { TEST_DISPATCH, RESET_PASSWORD_EMAIL } from '../actions/types';

const initialState = {
  user: {},
};
export default function(state = initialState, action) {
  switch(action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      }
    case RESET_PASSWORD_EMAIL:
      return {
        ...state,
        response: action.payload
      }
    default:
    return state;
  }
}
