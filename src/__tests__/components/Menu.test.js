/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import localStorageMock from '../__mocks__/localStorageMock';

window.localStorage = localStorageMock;

let wrapper;
const props = {
  auth: {
    isAuthenticated: true,
  },
};
describe('Menu Component', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<Menu {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
  describe('Elements', () => {
    beforeEach(() => {
      wrapper = mount(<MemoryRouter><Menu {...props}/></MemoryRouter>);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('should have one button element', () => {
      expect(wrapper.find('button').length).toEqual(1);
    });
  });
});
