import 'babel-polyfill';
import React from 'react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import store from '../../../store';
import Auth from '../../../components/authentication/Auth';
import Login from '../../../components/authentication/Login';

let wrapper;
beforeEach(() => {
    wrapper = mount(<Provider store={store}><MemoryRouter><Auth /></MemoryRouter></Provider>)
})
afterEach(() => {
    wrapper.unmount()
})
it('should have one Login component', () => {
    expect(wrapper.find(Login).length).toEqual(1);
})