import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search.jsx';
import Logo from './Logo.jsx';

/**
 * Menu Component
 */
export default class Menu extends Component {
  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <nav id="nav" className="navbar navbar-expand-lg bg-light">
        <Logo/>
        <button
        className="navbar-toggler pull-right"
        type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
          <span
          className="navbar-toggler-icon"><i className="fa fa-bars"> </i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search/>
          <ul className="navbar-nav mr-auto offset-1 offset-md-2">
            <li className="nav-item offset-md-5">
              <NavLink to="/login" >Login</NavLink>
            </li>
            <li className="nav-item offset-md-5">
              <NavLink to="/register" >Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
