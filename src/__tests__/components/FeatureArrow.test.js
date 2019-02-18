/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureArrow from '../../components/FeatureArrow';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FeatureArrow />);
});
describe('FeatureArrow Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
