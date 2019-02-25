/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { CreateArt, mapStateToProps } from '../../components/CreateArt.jsx';
import {createArtProps as props} from '../__mocks__/propsMock';

describe('Elements in page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <CreateArt {...props}/>,
    );
  });
  // afterEach(() => {
  //   wrapper.unmount();
  // });

  it('map state to props', () => {
    const mock = {
      artProps:{
        files: [],
        isLoading: true,
        categories:[],
        error: ''
      }
    };
    const state = mapStateToProps(mock);
    // expect(state).toEqual(mock);
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });


  it('should render', () => {
    const props2 = {
      ...props,
    };
    wrapper = mount(<CreateArt {...props2}/>);
    expect(wrapper.find('button')).toEqual({});
  });
});
