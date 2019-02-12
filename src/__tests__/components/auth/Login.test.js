import 'babel-polyfill';
import React from 'react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import store from '../../../store';
import Login from '../../../components/authentication/Login';

describe('Elements in page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><MemoryRouter><Login /></MemoryRouter></Provider>)
  })
  afterEach(() => {
    wrapper.unmount();
  })
  it('should have two input fields', () => {
      expect(wrapper.find('input').length).toEqual(2)
  })
  it('should have one form', () => {
      expect(wrapper.find('form').length).toEqual(1)
  })
  it('should have one button', () => {
      expect(wrapper.find('button').length).toEqual(1)
  })
  it('should contain a password field with a password attribute', () => {
    wrapper.find('.input2').simulate('change', {
      target: name
    })
    wrapper.update()
    expect(wrapper.find('.input2').prop('name')).toContain('password')
  })
  it('should contain a password field with a email attribute', () => {
    wrapper.find('.input1').simulate('change', {
      target: name
    })
    wrapper.update()
    expect(wrapper.find('.input1').prop('name')).toContain('email')
  })
  it('should have email value', () => {
       wrapper.find('.input1').simulate('change', {
        target: {value: ''}
      })
      wrapper.update()
      expect(wrapper.find('.input1').prop('value')).toEqual('')
  })
  it('should empty the form on submit', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update()
      expect(wrapper.find('.input2').prop('value')).toEqual('')
  })
})
