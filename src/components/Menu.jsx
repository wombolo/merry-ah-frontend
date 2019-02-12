import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Logo from './Logo';

export default class Menu extends Component {
  render() {
    return (
      <nav id="nav" className="navbar navbar-expand-lg bg-light">
        <Logo/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Search/>
         <ul className="nav navbar-nav mr-auto col-lg-2 float-right offset-1">
            <li className="nav-item">
              <NavLink to="/login" >Login</NavLink>
            </li>
            <li className="nav-item offset-1">
              <NavLink to="/register" >Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
