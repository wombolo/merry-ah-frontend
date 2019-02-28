/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ArtList from '../../components/ArtList.jsx';
import { props } from '../__mocks__/usersMock';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <ArtList {...props} />
    </MemoryRouter>,
  );
});
describe('ArtList Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
