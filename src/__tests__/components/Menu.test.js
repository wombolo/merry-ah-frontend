/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../components/Menu';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Menu />);
});
describe('Menu Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
