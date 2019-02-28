/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import { Profile } from '../../components/Profile.jsx';
import { props } from '../__mocks__/usersMock';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <Profile {...props} />
    </MemoryRouter>,
  );
});
describe('ProfileBanner Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls handleEditProfile()', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const ProfileInstance = wrapper.find('Profile');
    sinon.spy(ProfileInstance.instance(), 'handleEditProfile');
    ProfileInstance.instance().handleEditProfile(event);
    expect(ProfileInstance.instance().handleEditProfile.calledOnce)
      .toEqual(true);
  });

  it('calls handleChange() with image file', () => {
    const event = {
      target: {
        id: 'image',
        files: ['image.url'],
      },
    };
    const ProfileInstance = wrapper.find('Profile');
    sinon.spy(ProfileInstance.instance(), 'handleChange');
    ProfileInstance.instance().handleChange(event);
    expect(ProfileInstance.instance().handleChange.calledOnce)
      .toEqual(true);
  });
  it('calls handleChange() with bio value', () => {
    const event = {
      target: {
        id: 'bio',
        value: 'My biography',
      },
    };
    const ProfileInstance = wrapper.find('Profile');
    sinon.spy(ProfileInstance.instance(), 'handleChange');
    ProfileInstance.instance().handleChange(event);
    expect(ProfileInstance.instance().handleChange.calledOnce)
      .toEqual(true);
  });
});
