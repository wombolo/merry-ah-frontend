import {
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
  RESET_ALL_SLIDES,
  SET_INIT_SLIDE,
} from '../actions/types';

const initialState = {
  artList: [
    {
      objectID: 1,
      url: '../assets/images/1.jpg',
      title: 'Do you love art',
      category: 'painting',
    },
    {
      objectID: 2,
      url: '../assets/images/2.jpg',
      title: 'Cirrhosis of the sky',
      category: 'freehand_sketch',
    },
    {
      objectID: 3,
      url: '../assets/images/3.jpg',
      title: 'Walkers Short Bread',
      category: 'mosaic',
    },
    {
      objectID: 4,
      url: '../assets/images/4.jpg',
      title: 'How to have a blast',
      category: 'mosaic',
    },
    {
      objectID: 5,
      url: '../assets/images/5.jpg',
      title: 'Debugging best practices',
      category: 'mosaic',
    },
    {
      objectID: 6,
      url: '../assets/images/6.jpg',
      title: 'Fast and furious remake',
      category: 'mosaic',
    },
    {
      objectID: 7,
      url: '../assets/images/7.jpg',
      title: 'Best Coder alive',
      category: 'mosaic',
    },
    {
      objectID: 8,
      url: '../assets/images/8.jpg',
      title: 'Fifa e-world cup',
      category: 'mosaic',
    },
    {
      objectID: 9,
      url: '../assets/images/9.jpg',
      title: 'Perfection at its peak',
      category: 'mosaic',
    },
  ],
  activeList: [],
};

/**
 *  @param {function} state
 * @param {function} action
 *  @returns {Object} action obj
 */
function featureReducer(state = initialState, action) {
  if (action.type === SET_INIT_SLIDE) {
    console.log('+++++ ', action);
    return Object.assign({}, state, {
      activeList: state.artList.slice(0, 3),
    });
  }
  if (action.type === SET_NEXT_SLIDE) {
    console.log('activeList', state.activeList);
    const secondItem = state.activeList[1].objectID;
    console.log('secondItem', secondItem);

    /**
     * @params {object}
     * @returns {index}
     */
    const found = state.artList
      .findIndex(element => element.objectID === secondItem);
    console.log('found : ', found);

    return Object.assign({}, state, {
      activeList: state.artList.slice(found, found + 3),
    });
  }
  if (action.type === SET_PREVIOUS_SLIDE) {
    console.log('activeList', state.activeList);
    const secondItem = state.activeList[1].objectID;
    console.log('secondItem', secondItem);

    /**
     * @params {object}
     * @returns {index}
     */
    const found = state.artList
      .findIndex(element => element.objectID === secondItem);
    console.log('found : ', found);

    console.log(found - 2, found + 1);

    return Object.assign({}, state, {
      activeList: state.artList.slice(found - 2, found + 1),
    });
  }
  if (action.type === RESET_ALL_SLIDES) {
    return Object.assign({}, state, {
      activeList: state.artList.slice(0, 3),
    });
  }
  return state;
}

export default featureReducer;