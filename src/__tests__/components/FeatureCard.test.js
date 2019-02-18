/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureCard from '../../components/FeatureCard';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FeatureCard
    imgUrl='../a.jpeg'
    title='title'
    activeClass='cardactive' />);
});
describe('FeatureCard Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
