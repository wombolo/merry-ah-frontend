import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Logo Component
 */
export default class Logo extends Component {
  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <NavLink
      className="navbar-brand col-lg-2 logo pull-left w-50"
      to="/" id="brand-logo">
        <img alt={'logo'} src='../assets/images/artcave-logo.png' className='w-50' /></NavLink>
    );
  }
}
