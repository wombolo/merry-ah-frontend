import React from 'react';
import { shallow } from 'enzyme';
import AllArt from '../../components/AllArt.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AllArt />);
});
describe('AllArt Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
