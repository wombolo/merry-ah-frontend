/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ProfileEdit from '../../components/ProfileEdit.jsx';
import { props } from '../__mocks__/usersMock';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <ProfileEdit {...props} />
    </MemoryRouter>,
  );
});
describe('ProfileEdit Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should display laoding when the update is running', () => {
    const newProps = {
      user: {
        ...props.user,
        isLoading: true,
      },
    };
    wrapper = mount(
        <MemoryRouter>
          <ProfileEdit {...newProps} />
        </MemoryRouter>,
    );
    expect(wrapper.find('button').at(0).text()).toEqual('Updating');
  });
});
