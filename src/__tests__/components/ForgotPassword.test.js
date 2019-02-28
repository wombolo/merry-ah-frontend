/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { loginProps as props } from '../__mocks__/propsMock';
import {
  ForgotPassword,
  mapStateToProps,
} from '../../components/ForgotPassword.jsx';

describe('Elements in page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <ForgotPassword {...props}/>,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('map state to props', () => {
    const mock = {
      auth: {
        isLoading: true,
        error: '',
      },
    };
    const state = mapStateToProps(mock);
    expect(state).toEqual(mock);
  });
  it('should have one input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
  it('should have one form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
  it('should submit form', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
  });
  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
  it('should have Verify Email text in the button', () => {
    expect(wrapper.find('button').render().text()).toContain('Verify Email');
  });
  it('should contain disable props and it should be false', () => {
    expect(wrapper.find('button').props().disabled).toBe(false);
  });
  it('should contain an email field with an email attribute', () => {
    wrapper.find('.form-input').simulate('change', {
      target: name,
    });
    wrapper.update();
    expect(wrapper.find('.form-input').prop('name')).toContain('email');
  });
  it('should have email value', () => {
    wrapper.find('.form-input').simulate('change', {
      target: { value: '' },
    });
    wrapper.update();
    expect(wrapper.find('.form-input').prop('value')).toEqual('');
  });
  it('should render', () => {
    const props2 = { ...props, auth: { isLoading: true } };
    wrapper = mount(<ForgotPassword {...props2}/>);
    expect(wrapper.find('button')).toEqual({});
  });
});
