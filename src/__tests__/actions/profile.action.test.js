/* eslint-disable camelcase */
import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { basePath } from '../../utils/basePath';
import {
  getUserProfile,
  getUserArts,
  editProfile,
} from '../../actions/profileActions';
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_USER_ART_REQUEST,
  GET_USER_ART_SUCCESS,
  EDIT_PROFILE_REQUEST,
} from '../../actions/types';

const mockStore = configureMockStore([thunk]);
describe('Products actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it(`dispatches GET_PROFILE_REQUEST and
  GET_PROFILE_ERROR when fetching sales fail`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = [
      {
        type: GET_PROFILE_REQUEST,
      },
      {
        type: GET_PROFILE_ERROR,
      },
    ];
    const store = mockStore({});
    return store.dispatch(getUserProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`creates GET_PROFILE_REQUEST
  and GET_PROFILE_SUCCESS after successfuly
  fetching profile`, (done) => {
    const payload = {
      data: {
        user: { id: 2 },
      },
    };
    moxios.stubRequest(`${basePath}/users/2/profile`, {
      status: 200,
      response: payload,
    });
    const expectedActions = [
      { type: GET_PROFILE_REQUEST },
      { type: GET_PROFILE_SUCCESS, payload: payload.data.user },
    ];
    const store = mockStore({});
    store.dispatch(getUserProfile(2));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it(`creates GET_USER_ART_REQUEST
  and GET_USER_ART_SUCCESS after successfuly
  fetching profile`, (done) => {
    const payload = {
      data: {
        articles: { id: 2 },
      },
    };
    moxios.stubRequest(`${basePath}/arts/2/profile`, {
      status: 200,
      response: payload,
    });
    const expectedActions = [
      { type: GET_USER_ART_REQUEST },
      { type: GET_USER_ART_SUCCESS, payload: payload.data.articles },
    ];
    const store = mockStore({});
    store.dispatch(getUserArts(2));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates SET_UPLOAD_SUCCESS action', async (done) => {
    moxios.stubRequest(
      'https://api.cloudinary.com/v1_1/julietezekwe/image/upload',
      {
        status: 200,
        response: {
          secure_url: 'kkk.lll',
        },
      },
    );

    moxios.wait(() => {
      moxios.stubRequest(`${basePath}/users/profile-update`, {
        status: 'Ok',
        code: 201,
        messages: 'Profile updated successfully',
        data:
          {
            artId: 35,
            artTitle: 'Syntax Podcasts',
            slugifiedTitle: 'syntax-podcasts-4gl0se',
            artDescription: 'The Syntax Podcasts isn\'t suitable for all ages',
            artFeaturedImg:
              'https://farm3.staticflickr.com/2817/33968464326_a6f9cbc754_k',
            artCategoryId: 1,
            visited: 0,
            followersNotified: 'Message sent',
          },
      });
      const userDetails = {
        imgURL: 'kkk.lll',
        bio: 'iijbjb',
      };
      const expectedActions = [
        { type: EDIT_PROFILE_REQUEST },
      ];
      const store = mockStore({});
      store.dispatch(editProfile(userDetails));
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
