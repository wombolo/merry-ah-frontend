/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ProfileBanner from '../../components/ProfileBanner.jsx';
import { props } from '../__mocks__/usersMock';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <ProfileBanner {...props} />
    </MemoryRouter>,
  );
});
describe('ProfileBanner Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should display laoding when the user data is loading', () => {
    const newProps = {
      user: {
        userProfile: {
          
        },
      },
    };
    wrapper = mount(
        <MemoryRouter>
          <ProfileBanner {...newProps} />
        </MemoryRouter>,
    );
    expect(wrapper.find('h1').at(0).text()).toEqual('Loading Art works...');
  });
});
