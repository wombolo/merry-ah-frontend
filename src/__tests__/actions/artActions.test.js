/* eslint-disable camelcase */
import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import localStorageMock from '../__mocks__/localStorageMock';
import {createArt} from '../__mocks__/createArtMock';
import {
  addFile, removeFile, setCategories, getCategories, handleUploadImages
} from '../../actions/artActions';
import basePath from '../../utils/basePath';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
window.localStorage = localStorageMock;
let store;

beforeEach(() => {
  moxios.install();
  store = mockStore({});
});
afterEach(() => moxios.uninstall());

it('creates ADD_FILE', async () => {
  const action = await store.dispatch(addFile(createArt.image1));
  expect(store.getActions()[0].type).toEqual(action.type);
});

it('creates REMOVE_FILE', async () => {
  const action = await store.dispatch(removeFile(createArt.image1));
  expect(store.getActions()[0].type).toEqual(action.type);
});

it('creates GET_CATEGORIES_FILES', async () => {
  const action = store.dispatch(setCategories(store.dispatch(getCategories())));
  expect(store.getActions()[0].type).toEqual(action.type);
});


it('Post article successful', () => {
  moxios.stubRequest(`${basePath}/arts`, {
    status: 201,
    response: { messages: 'Article created successfully' },
  });

  store.dispatch(handleUploadImages()).then(() => {
    expect(window.location).toEqual('/');
  });
});
