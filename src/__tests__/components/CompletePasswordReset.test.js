/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { loginProps as props } from '../__mocks__/propsMock';
import {
  CompletePasswordReset,
} from '../../components/CompletePasswordReset.jsx';

describe('Elements in page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <CompletePasswordReset {...props}/>,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('should have two input fields', () => {
    expect(wrapper.find('input').length).toEqual(2);
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
  it('should have Proceed text in the button', () => {
    expect(wrapper.find('button').render().text()).toContain('Proceed');
  });
  it('should contain token state', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state().token).toBe('');
  });
  it('should contain a password field with a password attribute', () => {
    wrapper.find('.test-input1').simulate('change', {
      target: name,
    });
    wrapper.update();
    expect(wrapper.find('.test-input1').prop('name')).toContain('password');
  });
  it('should contain a field with a confirm password attribute', () => {
    wrapper.find('.test-input2').simulate('change', {
      target: name,
    });
    wrapper.update();
    expect(wrapper.find('.test-input2')
      .prop('name')).toContain('confirmPassword');
  });
  it('should have password value', () => {
    wrapper.find('.test-input1').simulate('change', {
      target: { value: '' },
    });
    wrapper.update();
    expect(wrapper.find('.test-input1').prop('value')).toEqual('');
  });
  it('should have password value', () => {
    wrapper.find('.test-input2').simulate('change', {
      target: { value: '' },
    });
    wrapper.update();
    expect(wrapper.find('.test-input2').prop('value')).toEqual('');
  });
  it('should render', () => {
    const props2 = { ...props, auth: { isLoading: true } };
    wrapper = mount(<CompletePasswordReset {...props2}/>);
    expect(wrapper.find('button')).toEqual({});
  });
});
