import { TEST_DISPATCH } from './types';

export const loginUser = userData => dispatch => {
    dispatch({
        type: TEST_DISPATCH,
        payload: userData
    })
}
