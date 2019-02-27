import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import sinon from 'sinon';
import localStorageMock from '../__mocks__/localStorageMock';
import {
  deleteSingleArt,
} from '../../actions/artsActions';
import { DELETE_SINGLE_ART } from '../../actions/types';
import { basePath } from '../../utils/basePath';

sinon.stub(window.location, 'replace');
const mockStore = configureMockStore([thunk]);
window.localStorage = localStorageMock;
let store;

describe('Art actions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => moxios.uninstall());

  it('creates DELETE_SINGLE_ART action', async (done) => {
    moxios.stubRequest(`${basePath}/arts/`, {
      status: 202,
    });

    moxios.wait(() => {
      const expectedActions = [];
      store.dispatch(deleteSingleArt('some-slug'));
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
