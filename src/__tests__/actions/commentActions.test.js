import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actionTypes from '../../actions/types';
import { deleteComment, createComment, getComments } from '../../actions/commentActions';

describe('Book actions', () => {
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  const comment = {
    comments: [{
      id: 1,
      comment: 'ononomono',
    }],
  };
  it('should dispatch GET_COMMENT_REQUEST and GET_COMMENTS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: comment.comments,
      });
    });
    const expectedActions = [{
      type: actionTypes.GET_COMMENT_REQUEST,
    }, {
      type: actionTypes.GET_COMMENTS,
      payload: comment.comments,
    },
    ];
    const store = mockStore({});
    return store.dispatch(getComments())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it(`dispatches CREATE_COMMENT and
    CREATE_COMMENT_SUCCESS when adding a comment`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: comment.comments,
      });
    });
    const expectedActions = [{
      type: actionTypes.CREATE_COMMENT,
    }, {
      type: actionTypes.CREATE_COMMENT_SUCCESS,
      commentData: comment.comments,
    },
    ];
    const store = mockStore({});
    return store.dispatch(createComment(1, comment.comments))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it(`dispatches DELETE_COMMENT_REQUEST and
  DELETE_COMMENT_SUCCESS when deleting a comment`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = [{
      type: actionTypes.DELETE_COMMENT_REQUEST,
    }, {
      type: actionTypes.DELETE_COMMENT_SUCCESS,
      commentId: 1,
    }];
    const store = mockStore({});
    return store.dispatch(deleteComment(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('dispatches CREATE_COMMENT_FAILURE', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });
    const expectedActions = [{
      type: actionTypes.CREATE_COMMENT,
    }, {
      type: actionTypes.CREATE_COMMENT_ERROR,
    }];
    const store = mockStore({});
    return store.dispatch(createComment(comment.comments))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('dispatches DELETE_COMMENT_FAILURE', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });
    const expectedActions = [{
      type: actionTypes.DELETE_COMMENT_REQUEST,
    }, {
      type: actionTypes.DELETE_COMMENT_FAILURE,
    }];
    const store = mockStore({});
    return store.dispatch(deleteComment(111))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
