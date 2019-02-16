import {
  SET_INIT_SLIDE,
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
  RESET_ALL_SLIDES,
} from './types';


/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function initSlide() {
  console.log('((((((' );
  return { type: SET_INIT_SLIDE };
}

// export const yyyyy = () => (dispatch) => {
//   dispatch(initSlide());
// };

/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function nextSlide(payload) {
  return { type: SET_NEXT_SLIDE, payload };
}

/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function previousSlide(payload) {
  return { type: SET_PREVIOUS_SLIDE, payload };
}

/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function resetSlides(payload) {
  return { type: RESET_ALL_SLIDES, payload };
}
