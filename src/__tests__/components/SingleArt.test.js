import React from 'react';
import { shallow } from 'enzyme';
import SingleArt from '../../components/SingleArt.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<SingleArt />);
});
describe('SingleArt Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
